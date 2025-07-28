import Grid from '@mui/material/Grid';
import styled from 'styled-components';

import eventAgenda from './eventAgenda.json';
import ColorfulCard from '@/components/Shares/ColorfulCard';
import { sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { devices } from '@/styles/variables';

const colors = ['#52f6c6', '#69eff2', '#f4cad4'];

const EventAgendaContainer = styled.div`
	background-color: #000;
	padding: 24px;
	width: 100%;
`;

const ContentContainer = styled.div`
	margin: 96px auto;
	max-width: 1440px;
	width: 100%;
	@media ${devices.tablet} {
		padding: 0 40px;
	}
`;

const Title = styled.h2`
	${sectionTitle};
	color: #fff;
	margin-bottom: 40px;
	max-width: unset;
`;
const Subtitle = styled.p`
	${sectionSubtitle};
`;

const CardWrapper = styled.div`
	background-color: #131313;
	justify-content: center;
	max-width: 368px;
	min-height: 466px;
	overflow: auto;
	padding: 0 0 24px;
`;

const EventAgenda = () => {
	return (
		<EventAgendaContainer>
			<ContentContainer>
				<Subtitle>AI + Web3 Convention 2024</Subtitle>
				<Title>Event Agenda</Title>
				<Grid container spacing={6} wrap="wrap">
					{eventAgenda.map((eventAgendaInfo, index) => (
						<Grid
							item
							mobile={12}
							tablet={12}
							laptop={6}
							largeLaptop={4}
							key={eventAgendaInfo.title}
						>
							<CardWrapper>
								<ColorfulCard
									title={eventAgendaInfo.title}
									subtitle={eventAgendaInfo.subtitle}
									description={eventAgendaInfo.description}
									backgroundColor={colors[index % colors.length]}
									showBulletPoint
								/>
							</CardWrapper>
						</Grid>
					))}
				</Grid>
			</ContentContainer>
		</EventAgendaContainer>
	);
};

export default EventAgenda;
