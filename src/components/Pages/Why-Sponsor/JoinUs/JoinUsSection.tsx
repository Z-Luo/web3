import styled from 'styled-components';

import { Description } from '@/components/Pages/Home/HomeCarousel/components/CarouseItem/CarouseItem';
import coverText from '@/components/Pages/Why-Sponsor/JoinUs/joinUsText.json';
import ThemeButton from '@/components/Shares/ThemeButton';
import { color, devices } from '@/styles/variables';

const { whiteColor, primaryColor } = color;
const Container = styled.div`
	align-items: center;
	background-image: url('/images/demo/whySponsorPage/join-us-background.png');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;

	@media ${devices.miniMobile} {
		height: 360px;
	}

	@media ${devices.desktop} {
		height: 500px;
	}
`;
const MainContent = styled.div`
	color: ${whiteColor};
	margin: 0 auto;
	max-width: 900px;
	text-align: center;
	@media ${devices.tablet} {
		padding: 0 40px;
	}
	@media ${devices.largeLaptop} {
		max-width: 1440px;
	}
`;
const JoinUsTitle = styled.div`
	font-weight: bold;
	white-space: pre-wrap;
	@media ${devices.miniMobile} {
		font-size: 24px;
	}
	@media ${devices.laptop} {
		font-size: 40px;
	}
`;
const JoinUsDescription = styled(Description)`
	color: #d9d9d9;
	margin-top: 20px;
	@media ${devices.miniMobile} {
		line-height: 1.8;
	}
	@media ${devices.mobile} {
		font-size: 14px;
		line-height: 1.33;
	}
	@media ${devices.laptop} {
		font-size: 18px;
		margin-bottom: 20px;
	}
`;
const JoinUsAdditionalDescription = styled.div`
	color: ${primaryColor};
	line-height: 1;
	margin-top: 10px;
	@media ${devices.miniMobile} {
		font-size: 10px;
	}
	@media ${devices.tablet} {
		font-size: 12px;
		line-height: 1.33;
	}
	@media ${devices.desktop} {
		font-size: 14px;
	}
`;

const joinUsButtonConfig = {
	text: 'PARTNER WITH US',
	url: '/partners'
};

const JoinUsSection = () => {
	return (
		<Container>
			<MainContent>
				<JoinUsTitle>{coverText.title}</JoinUsTitle>
				<JoinUsDescription isCurrent>{coverText.text}</JoinUsDescription>
				<JoinUsDescription isCurrent>
					Partnership:{' '}
					<a href="mailto:business@web3convention.com">business@web3convention.com</a>
				</JoinUsDescription>
				<ThemeButton href={joinUsButtonConfig.url}>{joinUsButtonConfig.text}</ThemeButton>
				<JoinUsAdditionalDescription>
					{coverText.additionalText}
				</JoinUsAdditionalDescription>
			</MainContent>
		</Container>
	);
};

export default JoinUsSection;
