import styled from 'styled-components';

import intro from './VenueIntroCard/intro.json';
import VenueIntroCard from '@/components/Pages/Venue/VenuIntroCards/VenueIntroCard';
import { animation, animationFillMode } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';

const { blackColor } = color;

const OuterContainer = styled.div`
	background-color: ${blackColor};
	padding: 40px 0px 145px 0px;
	@media ${devices.mobile} {
		padding: 127px 0px;
	}
`;

const Container = styled.div`
	display: grid;
	margin: 0px auto;
	max-width: 1440px;
	position: relative;
	row-gap: 20px;
	width: calc(100vw - 48px);

	@media ${devices.tablet} {
		display: flex;
		justify-content: space-between;
		width: calc(100vw - 100px);
	}
	@media ${devices.laptop} {
		width: calc(100vw - 200px);
	}
`;

const WaterMark = styled.div`
	color: #1d1d1d;
	font-size: 120px;
	font-weight: bold;
	left: -10px;
	opacity: 0;
	position: absolute;
	top: -150px;
	${animation('fade-in', '0.4s', 'linear', '0.1s', '1')};
	${animationFillMode()};
	@media ${devices.mobile} {
		top: -206px;
		font-size: 130px;
	}
	@media ${devices.tablet} {
		top: -216px;
		left: -40px;
		font-size: 150px;
	}
	@media ${devices.laptop} {
		left: 0;
		top: -232px;
		font-size: 170px;
	}
	@media ${devices.largeLaptop} {
		top: -242px;
		font-size: 190px;
	}
`;

const VenueIntroCards: React.FC = () => {
	return (
		<OuterContainer>
			<Container>
				<WaterMark>BCEC</WaterMark>
				{intro.map(cardContent => (
					<VenueIntroCard
						key={cardContent._id}
						imageSrc={cardContent.imageSrc}
						title={cardContent.title}
						description={cardContent.text}
					/>
				))}
			</Container>
		</OuterContainer>
	);
};

export default VenueIntroCards;
