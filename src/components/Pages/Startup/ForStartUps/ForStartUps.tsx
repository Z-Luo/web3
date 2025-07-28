import styled from 'styled-components';

import prize from '@/components/Pages/Startup/ForStartUps/forStartUps.json';
import ColorfulCard from '@/components/Shares/ColorfulCard';
import { sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';

const Container = styled.div`
	background-color: ${color.blackColor};
	padding: 24px;
	width: 100%;
`;
const ContentWrapper = styled.div`
	margin: 0 auto;
	margin-bottom: 113px;
	max-width: 1440px;
	width: 100%;
	@media ${devices.tablet} {
		padding: 0 40px;
	}
`;
const StyledGridContainer = styled.div`
	display: grid;
	gap: 50px;
	position: relative;
	@media ${devices.tablet} {
		column-gap: 40px;
		row-gap: 60px;
		grid-template-columns: repeat(2, 1fr);
	}
	@media ${devices.largeLaptop} {
		column-gap: 60px;
		row-gap: 66px;
		grid-template-columns: repeat(3, 360px);
	}
`;
const Title = styled.h2`
	${sectionTitle};
	color: #fff;
	margin-bottom: 40px;
	max-width: unset;
`;
const ColorTitle = styled.h2`
	${sectionTitle};
	color: #f652f2;
	font-size: 36px;
	margin-bottom: 40px;
	max-width: unset;
`;
const SectionSubtitle = styled.p`
	${sectionSubtitle};
`;
const ForStartUps = () => {
	return (
		<Container>
			<ContentWrapper>
				<SectionSubtitle>AI + Web3 Convention 2024</SectionSubtitle>
				<Title>Why Participate?</Title>
				<ColorTitle>· For Start-ups</ColorTitle>
				<StyledGridContainer>
					{prize.map(prizeInfo => (
						<ColorfulCard
							key={prizeInfo.title}
							title={prizeInfo.title}
							description={prizeInfo.description}
							backgroundColor="#f652f2"
							showBulletPoint={false}
						/>
					))}
				</StyledGridContainer>
			</ContentWrapper>
		</Container>
	);
};

export default ForStartUps;
