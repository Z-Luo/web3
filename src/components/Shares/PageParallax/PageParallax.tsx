import { useRef } from 'react';
import styled from 'styled-components';

import ThemeButton from '@/components/Shares/ThemeButton';
import { color, devices } from '@/styles/variables';

const { whiteColor } = color;

const HomeParallaxContainer = styled.div`
	background-image: url('/images/brisbane-convention-y.webp');
	background-repeat: no-repeat;
	background-size: cover;
	color: ${whiteColor};
	padding: 120px 24px;
	text-align: center;
	@media ${devices.tablet} {
		background-image: url('/images/brisbane-convention.webp');
		background-size: auto;
		background-position: center;
		padding: 148px 100px;
	}
`;
const Title = styled.h2`
	font-size: 40px;
	line-height: 1;
	margin-bottom: 60px;
	@media ${devices.tablet} {
		margin-bottom: 24px;
	}
`;
const SubTitle = styled.h3`
	font-size: 16px;
	font-weight: normal;
	:last-of-type {
		margin-bottom: 80px;
	}
`;

const PageParallax: React.FC = () => {
	const ParallaxContainer = useRef<HTMLDivElement>(null);

	return (
		<HomeParallaxContainer ref={ParallaxContainer}>
			<Title>Brisbane Convention & Exhibition Centre</Title>
			<SubTitle>
				Venue: Exhibition Hall 4, Brisbane Convention & Exhibition Centre, Australia
			</SubTitle>
			<SubTitle>Address: Merivale St, South Brisbane QLD 4101</SubTitle>
			<SubTitle>Date: 18-19 May, 2024</SubTitle>
			<ThemeButton href="https://web3convention.com/venue">VIEW MORE</ThemeButton>
		</HomeParallaxContainer>
	);
};

export default PageParallax;
