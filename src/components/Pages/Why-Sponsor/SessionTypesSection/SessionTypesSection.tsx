import styled from 'styled-components';

import sessionTypes from './sessionTypes.json';
import { color, devices } from '@/styles/variables';

const Container = styled.div`
	background-color: ${color.blackColor};
	padding: 24px;
	width: 100%;
`;
const ContentWrapper = styled.div`
	margin: 0 auto;
	max-width: 1440px;
	@media ${devices.tablet} {
		padding: 0 40px;
	}
	@media ${devices.largeLaptop} {
		margin-bottom: 190px;
	}
`;
const Title = styled.h2`
	color: ${color.whiteColor};
	font-size: 40px;
	font-weight: bold;
`;
const StyledGridContainer = styled.div`
	@media ${devices.laptop} {
		display: grid;
		row-gap: 48px;
		grid-template-columns: repeat(2, 1fr);
	}
`;
const StyledGridItem = styled.div``;
const SubTitle = styled.p`
	color: ${color.primaryColor};
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 8px;
`;
const Description = styled.p`
	color: ${color.whiteColor};
	font-size: 16px;
`;
const SessionTypesSection = () => {
	return (
		<Container>
			<ContentWrapper>
				<Title>Session Types at the Convention</Title>
				<StyledGridContainer>
					{sessionTypes.map(session => (
						<StyledGridItem key={session.id}>
							<SubTitle>{session.title}:</SubTitle>
							<Description>{session.description}</Description>
						</StyledGridItem>
					))}
				</StyledGridContainer>
			</ContentWrapper>
		</Container>
	);
};

export default SessionTypesSection;
