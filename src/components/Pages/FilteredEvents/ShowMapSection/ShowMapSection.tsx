import { Button, Pagination, Stack } from '@mui/material';
import { isEmpty } from 'lodash';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import InputTextFilter from '../InputTextFilter';

import ShowOnMapModal1 from './ShowOnMapModal';
import GoogleMapMarker from './ShowOnMapModal/GoogleMapMarker';
import ChooseLocation from '@/components/Pages/FilteredEvents/ChooseLocation';
import ShowOnMapEventItem from '@/components/Shares/ShowOnMapModal/ShowOnMapEventItem';
import { fetchPaginatedMeetups } from '@/services/meetup';
import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

type TSweb3MeetupPagination = TPagination<IMeetup>;

const { blackColor, primaryColor, whiteColor } = color;

const Container = styled.div`
	margin-bottom: 60px;
`;

const MapContainer = styled.div`
	background-image: url('/images/smallMapBackground.png');
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	height: 200px;
	position: relative;
`;

const InfoContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	gap: 24px;
	left: 50%;
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
`;

const StyledButton = styled.button`
	background-color: rgba(82, 246, 198, 0.1);
	border: solid 1px ${primaryColor};
	border-radius: 30px;
	color: ${primaryColor};
	cursor: pointer;
	font-weight: 700;
	height: 44px;
	width: 170px;
`;
const EventContainer = styled.div`
	background-color: ${blackColor};
	margin-left: 0;
	width: 100%;
	height: 650px;
	overflow-y: auto;
	padding-right: 8px; // Add space for moving the scrollbar
	box-sizing: border-box; // Include padding in the width calculation
	@media ${devices.largeLaptop} {
		width: 717px;
	}
	&::-webkit-scrollbar {
		width: 8px; // Adjust scrollbar width
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background-color: grey;
		border-radius: 4px;
		margin-right: -8px;
	}
`;
const SingleEventContainer = styled.div`
	margin-bottom: 16px;
	margin-top: 10px;
	&:hover {
		transform: translateY(-10px);
	}
`;
const ShowMapContainer = styled.div`
	height: auto;
	width: 100%;
`;
const FilteredContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 8px;
	width: 100%;
	@media ${devices.mobile} {
		padding: 0 8px 0 24px;
		width: 770px;
	}
`;
const LocationAndNameContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1vw 1vw;
	width: 310px;
	@media ${devices.mobile} {
		flex-direction: row;
		padding: 24px 22px 40px 0px;
		gap: 40px;
		width: 100%;
	}
`;
const NameContainer = styled.div`
	align-items: center;
	text-align: center;
	width: 100%;
`;

const PaginationContainer = styled.div`
	color: white;
	display: flex;
	justify-content: center;
	margin-top: 20px;
`;

const MuiPagination = styled(Pagination)`
	.MuiPaginationItem-root {
		color: ${whiteColor};
	}
	.Mui-selected {
		color: ${primaryColor};
	}
`;

const MuiButton = styled(Button)`
	color: ${whiteColor};
`;

const ShowMapSection = () => {
	const [open, setOpen] = useState(false);
	const [filterEvent, setFilterEvent] = useState<IMeetup[]>([]);
	const [selectedLocation, setSelectedLocation] = useState('');
	const [searchInput, setSearchInput] = useState('');
	const [activeEventId, setActiveEventId] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [totalCount, setTotalCount] = useState(1);
	const [hasPreviousPage, setHasPreviousPage] = useState<boolean>();
	const [hasFollowingPage, setHasFollowingPage] = useState<boolean>();

	const fetchEvents = async () => {
		const response = await fetchPaginatedMeetups(currentPage, 12);
		const meetupData: TSweb3MeetupPagination = response.data;
		const { docs, totalPages, hasPrevPage, hasNextPage } = meetupData;
		setFilterEvent(docs);
		setTotalCount(totalPages || 0);
		setHasPreviousPage(hasPrevPage);
		setHasFollowingPage(hasNextPage);
	};

	useEffect(() => {
		fetchEvents();
	}, [currentPage]);

	const toggleModal = () => {
		setOpen(!open);
	};
	const handleSearchInputChange = (inputValue: string) => {
		setSearchInput(inputValue.toLowerCase());
	};

	const handleLocationChange = (location: string) => {
		setSelectedLocation(location);
	};
	const handleEventMouseEnter = (eventId: string) => {
		setActiveEventId(eventId);
	};

	const handleEventMouseLeave = () => {
		setActiveEventId('');
	};

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const backButtonHandler = () => {
		handlePageChange(currentPage - 1);
	};

	const nextButtonHandler = () => {
		handlePageChange(currentPage + 1);
	};

	const handleEventsFiltered = (filteredEvents: IMeetup[]) => {
		setFilterEvent(filteredEvents); // Update state with filtered events
	};
	const filteredEvents = filterEvent.filter(
		event =>
			(isEmpty(selectedLocation) ||
				(!isEmpty(event.city) && event.city[0].name === selectedLocation)) &&
			(isEmpty(searchInput) || event.title.toLowerCase().includes(searchInput))
	);

	return (
		<Container>
			<MapContainer>
				<InfoContainer>
					<Image
						src="images/icons/locationPinIcon.png"
						alt="pin"
						width={39}
						height={48}
						loader={imageLoader}
					/>
					<StyledButton onClick={toggleModal}>Show on the map</StyledButton>
				</InfoContainer>
				<ShowOnMapModal1 open={open} handleClose={toggleModal}>
					<FilteredContainer>
						<LocationAndNameContainer>
							<NameContainer>
								<InputTextFilter onInputChange={handleSearchInputChange} />
							</NameContainer>
							<ChooseLocation onLocationChange={handleLocationChange} />
						</LocationAndNameContainer>
						<EventContainer>
							{isEmpty(filteredEvents) ? (
								<div>No results found</div>
							) : (
								filteredEvents.map(eventInfo => (
									<SingleEventContainer
										key={eventInfo._id}
										onMouseEnter={() => handleEventMouseEnter(eventInfo._id)}
										onMouseLeave={handleEventMouseLeave}
									>
										<ShowOnMapEventItem event={eventInfo} />
									</SingleEventContainer>
								))
							)}
							<PaginationContainer>
								<Stack direction="row" spacing={2}>
									<MuiButton
										onClick={backButtonHandler}
										sx={{
											'&:disabled': {
												color: '#676767'
											}
										}}
										disabled={!hasPreviousPage}
									>
										&lt; Back
									</MuiButton>
									<MuiPagination
										count={totalCount}
										page={currentPage}
										onChange={(event, page) => handlePageChange(page)}
										hidePrevButton
										hideNextButton
									/>
									<MuiButton
										onClick={nextButtonHandler}
										sx={{
											'&:disabled': {
												color: '#676767'
											}
										}}
										disabled={!hasFollowingPage}
									>
										Next &gt;
									</MuiButton>
								</Stack>
							</PaginationContainer>
						</EventContainer>
					</FilteredContainer>
					<ShowMapContainer>
						{/* <GoogleMapMarker
							events={filteredEvents}
							activeEventId={activeEventId}
							onEventsFiltered={handleEventsFiltered}
						/> */}
					</ShowMapContainer>
				</ShowOnMapModal1>
			</MapContainer>
		</Container>
	);
};

export default ShowMapSection;
