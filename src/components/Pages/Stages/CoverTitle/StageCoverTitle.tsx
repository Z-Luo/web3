import styled from 'styled-components';

import {
	Description,
	Subtitle,
	Title
} from '@/components/Pages/Home/HomeCarousel/components/CarouseItem/CarouseItem';
import coverText from '@/components/Pages/Stages/CoverTitle/StageCoverTitle.json';
import { color, devices } from '@/styles/variables';

const { whiteColor, primaryColor } = color;

const Container = styled.div`
	color: ${whiteColor};
	margin: 0 auto;
	max-width: 1600px;
	position: relative;
	top: 50%;
	@media ${devices.miniMobile} {
		transform: translate(0, calc(-50% - 40px));
		width: calc(100vw - 100px);
	}
	@media ${devices.tablet} {
		transform: translate(0, calc(-50% - 30px));
	}
	@media ${devices.laptop} {
		transform: translate(0, calc(-50% - 70px));
		width: calc(100vw - 200px);
	}
	@media ${devices.desktop} {
		transform: translate(0, calc(-50% - 90px));
	}
`;

const CoverSubtitle = styled(Subtitle)`
	color: ${primaryColor};
	@media ${devices.miniMobile} {
		font-size: 10px;
	}
	@media ${devices.tablet} {
		font-size: 12px;
	}
	@media ${devices.largeLaptop} {
		font-size: 15px;
	}
	@media ${devices.desktop} {
		font-size: 17px;
	}
`;

const CoverTitle = styled(Title)`
	white-space: pre-wrap;
	@media ${devices.miniMobile} {
		margin-bottom: 50px;
		font-size: 32px;
	}
	@media ${devices.tablet} {
		margin-bottom: 80px;
		font-size: 32px;
	}
	@media ${devices.laptop} {
		margin-bottom: 34px;
	}
	@media ${devices.largeLaptop} {
		font-size: 50px;
	}
	@media ${devices.desktop} {
		margin-bottom: 90px;
		font-size: 75px;
	}
`;

const CoverDescription = styled(Description)`
	@media ${devices.miniMobile} {
		font-size: 14px;
	}
	@media ${devices.tablet} {
		max-width: 85%;
		font-size: 16px;
	}
	@media ${devices.largeLaptop} {
		max-width: 70%;
	}
	@media ${devices.desktop} {
		font-size: 17px;
	}
`;
const StageCoverTitle = () => {
	return (
		<Container>
			<CoverSubtitle isCurrent>{coverText.subtitle}</CoverSubtitle>
			<CoverTitle isCurrent>{coverText.title}</CoverTitle>
			<CoverDescription isCurrent>{coverText.text}</CoverDescription>
		</Container>
	);
};

export default StageCoverTitle;
