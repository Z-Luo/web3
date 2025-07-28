// import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';

import AgendaTable from './components/AgendaTable';
// import EventFilter from './components/EventFilter';
// import { ALL_EVENTS, EEventType } from '@/constants/event';
import { backdrop, sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { devices } from '@/styles/variables';

const HomeEventContainer = styled.div`
	overflow: hidden;
	position: relative;
`;
const Container = styled.div`
	margin: 0 auto;
	max-width: 1440px;
	padding: 80px 0;
	@media ${devices.mobile} {
		padding: 50px 10px;
	}
`;

const Backdrop = styled.div`
	${backdrop};
	left: 5vw;
	@media ${devices.mobile} {
		left: 2vw;
		top: 0;
	}
`;

const ContentContainer = styled.div`
	margin: 10px 0 40px;
`;

const Title = styled.h2`
	${sectionTitle};

	@media ${devices.desktop} {
		margin-bottom: 50px;
	}
	@media ${devices.miniMobile} {
		margin-bottom: 39px;
	}
`;

const Subtitle = styled.p`
	${sectionSubtitle};
`;

const HomeEvent: React.FC = () => {
	// const router = useRouter();
	// const { isMobile } = useResize(sizes.laptop);
	// const [currentFilterType, setCurrentFilterType] = useState<EEventType | undefined>();

	useEffect(() => {
		// const { filterType } = router.query;
		// setCurrentFilterType(filterType === ALL_EVENTS ? undefined : (filterType as EEventType));
	}, []);

	return (
		<HomeEventContainer>
			<Container>
				<Backdrop>Agenda</Backdrop>
				<ContentContainer>
					<Subtitle>AI + Web3 Convention 2024</Subtitle>
					<Title>Convention Agenda</Title>
					{/* <EventFilter
					currentFilterType={currentFilterType}
					setCurrentFilterType={setCurrentFilterType}
				/> */}
					{/* {isMobile ? (
					<EventAccordion
						list={eventList as IEvent[]}
						currentFilterType={currentFilterType}
					/>
				) : (
					<EventTable
						list={eventList as IEvent[]}
						currentFilterType={currentFilterType}
					/>
				)} */}
					<AgendaTable />
				</ContentContainer>
			</Container>
		</HomeEventContainer>
	);
};

export default HomeEvent;
