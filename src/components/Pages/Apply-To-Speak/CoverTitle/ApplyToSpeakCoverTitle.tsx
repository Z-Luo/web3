import styled from 'styled-components';

import coverText from '@/components/Pages/Apply-To-Speak/CoverTitle/ApplyToSpeakCoverText.json';
import {
	Subtitle,
	Title
} from '@/components/Pages/Home/HomeCarousel/components/CarouseItem/CarouseItem';
import { color, devices } from '@/styles/variables';

const { whiteColor, primaryColor } = color;

const Container = styled.div`
	color: ${whiteColor};
	margin: 0 auto;
	max-width: 1440px;
	position: relative;
	@media ${devices.miniMobile} {
		padding: 0 20px 0 18px;
		margin-top: 150px;
	}
	@media ${devices.tablet} {
		padding: 0 30px 0 0;
		margin-top: 50px;
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

const StageCoverTitle = () => {
	return (
		<Container>
			<CoverSubtitle isCurrent>{coverText.subtitle}</CoverSubtitle>
			<CoverTitle isCurrent>{coverText.title}</CoverTitle>
		</Container>
	);
};

export default StageCoverTitle;
