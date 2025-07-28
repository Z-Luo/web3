import WestIcon from '@mui/icons-material/West';
import { Button, Pagination, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import ChooseLocation from './ChooseLocation';
// import DateFilter from './DateFilter';
import PriceFilter from './PriceFilter';
import ShowMapSection from './ShowMapSection/ShowMapSection';
import EventItem from '@/components/Shares/EventItem';
import { fetchPaginatedMeetups } from '@/services/meetup';
import { color, devices } from '@/styles/variables';

type TSweb3MeetupPagination = TPagination<IMeetup>;

const { blackColor, primaryColor, whiteColor } = color;

const Container = styled.div`
	background-color: ${blackColor};
`;

const BackEventsButtonSection = styled.div`
	display: flex;
	margin-left: 20px;
	max-width: 1440px;
	@media ${devices.laptop} {
		margin-left: 130px;
	}
	@media ${devices.desktop} {
		margin-left: 180px;
	}
`;
const BackEventsButtonContainer = styled.div`
	align-items: center;
	cursor: pointer;
	display: flex;
`;
const BackEventsArrow = styled(WestIcon)`
	color: ${primaryColor};
	padding-right: 6px;
`;
const BackEventsText = styled.p`
	color: ${primaryColor};
	font-size: 20px;
	letter-spacing: 1px;
`;

const MainContainer = styled.div`
	background-color: ${blackColor};
	background-position: center;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	padding: 20px;
	@media ${devices.mobile} {
		flex-direction: row;
		padding: 1vw 9vw;
	}
`;
const FilteredContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	@media ${devices.mobile} {
		width: 420px;
	}
`;
const EventContainer = styled.div`
	background-color: ${blackColor};
	margin-left: 0;
	width: 100%;
	@media ${devices.mobile} {
		width: 70%;
		margin-left: 4.5vw;
	}
`;
const SingleEventContainer = styled.div`
	margin-bottom: 40px;
`;

const PaginationContainer = styled.div`
	color: white;
	display: flex;
	justify-content: center;
	margin-top: 20px;
`;

const MuiStack = styled(Stack)`
	align-items: center;
	display: flex;
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

const MainContents = () => {
	const [filterEvent, setFilterEvent] = useState<IMeetup[]>([]);
	const [selectedLocation, setSelectedLocation] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [totalCount, setTotalCount] = useState(1);
	const [hasPreviousPage, setHasPreviousPage] = useState<boolean>();
	const [hasFollowingPage, setHasFollowingPage] = useState<boolean>();
	const [priceFilter, setPriceFilter] = useState('');
	const [error, setError] = useState(false);
	type DateRange = {
		startDate: Date | null;
		endDate: Date | null;
	};
	const [dateRange, setDateRange] = useState<DateRange>({ startDate: null, endDate: null });
	const router = useRouter();

	const navigateToSideEvents = () => {
		router.push('/side-events');
	};

	const fetchEvents = async () => {
		try {
			const response = await fetchPaginatedMeetups(currentPage, 12);
			const meetupData: TSweb3MeetupPagination = response.data;
			const { docs, totalPages, hasPrevPage, hasNextPage } = meetupData;
			const filteredByPrice =
				priceFilter === '' ? docs : docs.filter(event => event.price === priceFilter);

			const filteredEvents = filteredByPrice.filter(event => {
				if (!dateRange.startDate || !dateRange.endDate) {
					return true;
				}
				if (event.period && event.period.start && event.period.end) {
					const eventStartDate = new Date(event.period.start);
					const eventEndDate = new Date(event.period.end);
					return (
						eventStartDate >= dateRange.startDate && eventEndDate <= dateRange.endDate
					);
				}
				return false;
			});

			setFilterEvent(filteredEvents);
			setTotalCount(totalPages || 0);
			setHasPreviousPage(hasPrevPage);
			setHasFollowingPage(hasNextPage);
			setError(false);
		} catch (e) {
			setError(true);
		}
	};

	useEffect(() => {
		fetchEvents();
	}, [currentPage, priceFilter, dateRange]);

	const handleLocationChange = (location: string) => {
		setSelectedLocation(location);
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

	const handlePriceChange = (selectedPrice: Price) => {
		setPriceFilter(selectedPrice);
	};

	const handleDateChange = (startDate: Date, endDate: Date) => {
		setDateRange({ startDate, endDate });
	};
	return (
		<Container>
			<BackEventsButtonSection>
				<BackEventsButtonContainer onClick={navigateToSideEvents}>
					<BackEventsArrow />
					<BackEventsText>EVENTS</BackEventsText>
				</BackEventsButtonContainer>
			</BackEventsButtonSection>
			<MainContainer>
				<FilteredContainer>
					<ShowMapSection />
					<ChooseLocation onLocationChange={handleLocationChange} />
					{/* <DateFilter onDateChange={handleDateChange} /> */}
					<PriceFilter onPriceChange={handlePriceChange} />
				</FilteredContainer>
				<EventContainer>
					{filterEvent.filter(
						event =>
							!selectedLocation ||
							(event.city &&
								event.city.length > 0 &&
								event.city[0].name === selectedLocation)
					).length > 0 ? (
						filterEvent
							.filter(
								event =>
									!selectedLocation ||
									(event.city &&
										event.city.length > 0 &&
										event.city[0].name === selectedLocation)
							)
							.map(eventInfo => (
								<SingleEventContainer key={eventInfo._id}>
									<EventItem eventInfo={eventInfo} />
								</SingleEventContainer>
							))
					) : (
						<div>No results found</div>
					)}
					{error && (
						<div>
							Sorry, there seems to be a problem with the search function at the
							moment. Please try again later or contact support if the issue persists.
						</div>
					)}
					<PaginationContainer>
						<MuiStack direction="row" spacing={2}>
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
						</MuiStack>
					</PaginationContainer>
				</EventContainer>
			</MainContainer>
		</Container>
	);
};

export default MainContents;
