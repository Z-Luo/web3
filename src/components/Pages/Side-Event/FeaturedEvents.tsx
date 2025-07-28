import { useEffect, useState } from 'react';
import styled from 'styled-components';

import EventCard from '@/components/Shares/EventCard';
import { fetchFeaturedEvents } from '@/services/meetup';
import { sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';

const { blackColor, whiteColor } = color;

const FeaturedEventsContainer = styled.div`
	background-color: ${blackColor};
	background-image: url('/images/dotsBackground.png');
	background-position: center right;
	background-repeat: no-repeat;
	background-size: contain;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	max-width: 1200px;
	padding-bottom: 100px;
	width: calc(100vw - 50px);
	@media ${devices.mobile} {
		width: calc(100vw - 100px);
	}
	@media ${devices.largeLaptop} {
		padding-bottom: 170px;
	}
`;

const WebConvention = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 12px;
`;

const Title = styled.h2`
	${sectionTitle};
	color: ${whiteColor};
	margin-bottom: 0px;
	padding-bottom: 60px;
`;

const FlexContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 50px;
	justify-content: center;
	@media ${devices.mobile} {
		justify-content: space-between;
	}
`;

const Subtitle = styled.p`
	${sectionSubtitle};
`;

const FeaturedEvents = () => {
	const [featuredEvents, setFeaturedEvents] = useState<IMeetup[]>([]);
	const fetchData = async () => {
		const response = await fetchFeaturedEvents();
		setFeaturedEvents(response.data?.docs);
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<FeaturedEventsContainer>
			<Container>
				<WebConvention>
					<Subtitle>WEB3.Convention</Subtitle>
					<Title>Featured Events</Title>
				</WebConvention>
				<FlexContainer>
					{featuredEvents?.slice(0, 3).map(featuredEventInfo => (
						<EventCard key={featuredEventInfo._id} eventInfo={featuredEventInfo} />
					))}
				</FlexContainer>
			</Container>
		</FeaturedEventsContainer>
	);
};

export default FeaturedEvents;
