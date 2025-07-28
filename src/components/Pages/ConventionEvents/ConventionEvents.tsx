import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import AiEventCard from '@/components/Shares/AiEventCard';
import { fetchConventionEvents, fetchFeaturedConventionEvents } from '@/services/meetup';
import { color, devices } from '@/styles/variables';

const { blackColor, primaryColor } = color;

const ConventionEventContainer = styled.div`
	background-color: ${blackColor};
	background-image: url('/images/dotsBackground.png');
	background-position: bottom left;
	background-repeat: no-repeat;
`;
const MoreEventsContainer = styled.div`
	margin-top: 170px;
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	max-width: 1200px;
`;
const WebConvention = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 198px;
	padding-left: 12px;
`;
const Title = styled.span`
	color: ${primaryColor};
	font-size: 14px;
	font-style: italic;
	height: 16px;
	letter-spacing: 1px;
`;
const SectionTitle = styled.span`
	color: #fff;
	font-size: 40px;
	font-weight: bold;
	height: 44px;
	letter-spacing: 1px;
	margin-top: 8px;
	text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
`;
const StyledLink = styled(Link)`
	display: flex;
	justify-content: center;
	margin-top: 75px;
`;
const StyledButton = styled.button`
	background-color: rgba(82, 246, 198, 0.1);
	border: solid 1px ${primaryColor};
	border-radius: 30px;
	color: ${primaryColor};
	height: 52px;
	width: 200px;
`;
const StyledContainer = styled.div`
	display: grid;
	gap: 10px;
	grid-template-columns: 1fr;
	width: 100%;
	@media ${devices.tablet} {
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${devices.largeLaptop} {
		grid-template-columns: repeat(3, 1fr);
	}
`;
const StyledItem = styled.div`
	justify-self: center;
	margin-top: 50px;
`;

const ConventionEvents: React.FC = () => {
	const [conventionEvents, setConventionEvents] = useState<IMeetup[]>([]);

	const fetchData = async () => {
		const response = await fetchConventionEvents();
		setConventionEvents(response.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const [featuredEvents, setFeaturedEvents] = useState<IMeetup[]>([]);
	const fetchFeaturedData = async () => {
		const response = await fetchFeaturedConventionEvents();
		setFeaturedEvents(response.data);
	};
	useEffect(() => {
		fetchFeaturedData();
	}, []);

	return (
		<ConventionEventContainer>
			<Container>
				<WebConvention>
					<Title>{'< Melbourne, April 2024 / >'}</Title>
					<SectionTitle>Featured Events</SectionTitle>
				</WebConvention>
				<StyledContainer>
					{featuredEvents?.slice(0, 3).map(featuredEventInfo => (
						<StyledItem key={featuredEventInfo._id}>
							<AiEventCard eventInfo={featuredEventInfo} />
						</StyledItem>
					))}
				</StyledContainer>
				<MoreEventsContainer>
					<WebConvention>
						<Title>{'< Melbourne, April 2024 / >'}</Title>
						<SectionTitle>More Events</SectionTitle>
					</WebConvention>
					<StyledContainer>
						{conventionEvents?.map(eventInfo => (
							<StyledItem key={eventInfo._id}>
								<AiEventCard eventInfo={eventInfo} />
							</StyledItem>
						))}
					</StyledContainer>
				</MoreEventsContainer>
			</Container>
			<StyledLink href="/filtered-events">
				<StyledButton type="button">SEE MORE</StyledButton>
			</StyledLink>
		</ConventionEventContainer>
	);
};

export default ConventionEvents;
