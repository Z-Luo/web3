import Image from 'next/image';
import styled from 'styled-components';

import cityInformation from './cityInformation.json';
import BeachDaytime from '@/assets/images/gold-coast-beach-daytime.jpg';
import BeachSunset from '@/assets/images/gold-coast-beach-sunset.jpg';
import { sectionSubtitle } from '@/styles/mixin';
import { devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const Container = styled.div`
	margin-bottom: 49px;
	padding: 24px;
	@media ${devices.largeLaptop} {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-around;
		margin-bottom: 200px;
	}
`;
const CityWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media ${devices.largeLaptop} {
		width: 506px;
		justify-content: flex-start;
	}
`;
const Subtitle = styled.p`
	${sectionSubtitle}
	letter-spacing: 1px;
	margin-bottom: 8px;
`;
const CityTitle = styled.p`
	font-size: 40px;
	font-weight: bold;
	margin: 8px 0 16px 0px;
	@media ${devices.largeLaptop} {
		margin: 8px 0 30px 0px;
	}
`;
const CityDescription = styled.p`
	font-size: 14px;
	line-height: 1.57;
	margin: 0 0 28px 0;
`;
const ImageWrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	overflow: hidden;
	@media ${devices.tablet} {
		flex-direction: row;
	}
	@media ${devices.largeLaptop} {
		overflow: visible;
		position: relative;
	}
`;
const BeachMorning = styled(Image)`
	@media ${devices.tablet} {
		height: 378px;
		margin: 0 28px 0px 0;
	}
	@media ${devices.largeLaptop} {
		position: absolute;
		width: 589px;
		height: 368px;
		top: 380px;
		left: 440px;
	}
`;
const BeachEvening = styled(Image)`
	margin-bottom: 28px;
	@media ${devices.tablet} {
		height: 378px;
		margin: 0;
	}
	@media ${devices.largeLaptop} {
		width: 589px;
		height: 680px;
	}
`;

const GoldCoastCity = () => {
	return (
		<Container>
			<CityWrapper>
				<Subtitle>the beautiful City</Subtitle>
				<CityTitle>{cityInformation.GoldCoast.title}</CityTitle>
				<CityDescription>{cityInformation.GoldCoast.description}</CityDescription>
			</CityWrapper>
			<ImageWrapper>
				<BeachEvening
					src={BeachSunset.src}
					alt="Gold Coast Beach 2"
					width={327}
					height={378}
					loader={imageLoader}
					unoptimized
					priority
				/>
				<BeachMorning
					src={BeachDaytime.src}
					alt="Gold Coast Beach 1"
					width={327}
					height={204}
					loader={imageLoader}
					unoptimized
					priority
				/>
			</ImageWrapper>
		</Container>
	);
};

export default GoldCoastCity;
