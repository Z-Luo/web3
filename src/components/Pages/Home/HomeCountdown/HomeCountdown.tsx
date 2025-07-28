import dynamic from 'next/dynamic';
import styled from 'styled-components';

import { sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';

const { blackColor, whiteColor } = color;

const HomeCountdownContainer = styled.div`
	background-color: ${blackColor};
	background-image: url('/images/demo/countdown-bg-img.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	color: ${whiteColor};
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 100px 30px;
	width: 100%;
	@media ${devices.tablet} {
		padding: 60px;
	}
	@media ${devices.laptop} {
		flex-direction: row;
		align-items: center;
	}
`;

const TitleContainer = styled.div`
	margin-bottom: 60px;
	@media ${devices.laptop} {
		max-width: 280px;
		margin-right: 80px;
		margin-bottom: 0;
	}
`;

const Title = styled.h2`
	${sectionTitle};
	font-size: 28px;
	margin: 0;
`;

const Subtitle = styled.p`
	${sectionSubtitle};
`;
const DynamicCountdown = dynamic(() => import('@/components/Shares/Countdown'), {
	ssr: false
});
const HomeCountdown: React.FC = () => {
	return (
		<HomeCountdownContainer>
			<TitleContainer>
				<Subtitle>Brisbane, 18-19 May, 2024</Subtitle>
				<Title>Count Every Second Until Event</Title>
			</TitleContainer>
			<DynamicCountdown />
		</HomeCountdownContainer>
	);
};

export default HomeCountdown;
