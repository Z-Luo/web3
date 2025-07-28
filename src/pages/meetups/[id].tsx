import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import EventDescription from '@/components/Shares/EventDetail/EventDescription';
import ExhibitorInfo from '@/components/Shares/EventDetail/ExhibitorInfo';
import Interaction from '@/components/Shares/EventDetail/Interaction';
import LocationCard from '@/components/Shares/EventDetail/LocationCard';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import { fetchEventDetails, fetchExhibitor } from '@/services/meetup';
import { color, devices } from '@/styles/variables';

const { blackColor } = color;
const Container = styled.div`
	background-color: ${blackColor};
	background-position: center;
	display: flex;
	flex-direction: column;
	padding: 20px;
	width: 100%;
`;
const DescriptionAndLocation = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	@media ${devices.mobile} {
		margin: 0 auto 250px;
	}
	margin: 0 auto 50px;
	max-width: 1200px;
	width: 100%;
	@media ${devices.mobile} {
		flex-direction: row;
	}
	@media ${devices.largeLaptop} {
		gap: 110px;
	}
`;
const ContentWrapper = styled.div`
	margin: 0 auto;
	max-width: 1200px;
	width: 100%;
`;
const Title = styled.h1`
	color: ${color.whiteColor};
	letter-spacing: 1px;
	line-height: 1.25;
	margin: 20px 0 32px 0;
`;

const EventDetails = () => {
	const router = useRouter();
	const id = router?.query?.id as string;
	const [eventDetail, setEventDetail] = useState<IMeetup>({} as IMeetup);
	const [exhibitor, setExhibitor] = useState<Exhibitor>({} as Exhibitor);

	const fetchData = async () => {
		const response = await fetchEventDetails(id);
		const eventDetailInfo = response.data || {};

		const { exhibitors } = eventDetailInfo;
		setEventDetail(eventDetailInfo);

		const exhibitorResponse = await fetchExhibitor(exhibitors);
		const exhibitorInfo = exhibitorResponse.data || {};
		setExhibitor(exhibitorInfo);
	};
	useEffect(() => {
		if (id) {
			fetchData();
		}
	}, [id]);

	const { title } = eventDetail || {};
	return (
		<Container>
			<Header />
			<ContentWrapper>
				<Title>{title}</Title>
				<ExhibitorInfo exhibitor={exhibitor} />
				<DescriptionAndLocation>
					<EventDescription eventDetail={eventDetail} />
					<LocationCard eventDetail={eventDetail} />
				</DescriptionAndLocation>
			</ContentWrapper>
			<Interaction eventDetail={eventDetail} />
			<Footer />
		</Container>
	);
};

export default EventDetails;
