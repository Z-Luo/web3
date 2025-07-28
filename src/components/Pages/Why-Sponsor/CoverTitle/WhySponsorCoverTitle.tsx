import styled from 'styled-components';

import {
	Description,
	Subtitle,
	Title
} from '@/components/Pages/Home/HomeCarousel/components/CarouseItem/CarouseItem';
import coverText from '@/components/Pages/Why-Sponsor/CoverTitle/whySponsorCoverText.json';
import ThemeButton from '@/components/Shares/ThemeButton';
import { color, devices } from '@/styles/variables';

const { whiteColor, primaryColor } = color;

const Container = styled.div`
	padding: 24px;
	@media ${devices.largeLaptop} {
		height: 800px;
	}
	width: 100%;
`;
const MainContent = styled.div`
	color: ${whiteColor};
	margin: 0 auto;
	max-width: 1440px;
	@media ${devices.tablet} {
		padding: 0 40px;
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
		font-size: 36px;
	}
	@media ${devices.laptop} {
		font-size: 55px;
	}
`;
const CoverDescription = styled(Description)`
	@media ${devices.miniMobile} {
		line-height: 1.8;
	}
	@media ${devices.mobile} {
		font-size: 14px;
		max-width: 80%;
		line-height: 1.33;
	}
	@media ${devices.laptop} {
		font-size: 18px;
	}
`;

const sponsorButtonConfig = {
	text: 'PARTNER WITH US',
	url: '/partners'
};

const StageCoverTitle = () => {
	return (
		<Container>
			<MainContent>
				<CoverSubtitle isCurrent>{coverText.subtitle}</CoverSubtitle>
				<CoverTitle isCurrent>{coverText.title}</CoverTitle>
				<CoverDescription isCurrent>{coverText.text}</CoverDescription>
				<ThemeButton href={sponsorButtonConfig.url}>{sponsorButtonConfig.text}</ThemeButton>
			</MainContent>
		</Container>
	);
};

export default StageCoverTitle;
