import Image from 'next/image';
import styled from 'styled-components';

import cityInformation from './cityInformation.json';
import BeachSunset from '@/assets/images/brisbane-beach-sunset.png';
import CityOverview from '@/assets/images/brisbane-city-overview.png';
import CityscapeView from '@/assets/images/brisbane-cityscape.png';
import DiningScene from '@/assets/images/brisbane-dining.png';
import { sectionSubtitle } from '@/styles/mixin';
import { devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const Container = styled.div`
	padding: 0 24px 24px 24px;
	@media ${devices.largeLaptop} {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		margin: 120px 0 400px 0;
		align-items: center;
		width: 100%;
	}
`;
const CityWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media ${devices.largeLaptop} {
		width: 600px;
		position: relative;
	}
`;
const BoldText = styled.span`
	font-size: 70px;
	font-weight: bold;
	margin: 0 35px 16px 0;
	opacity: 0.03;
	@media ${devices.largeLaptop} {
		position: absolute;
		font-size: 230px;
		font-weight: bold;
		top: 340px;
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
	@media ${devices.largeLaptop} {
		width: 377px;
	}
`;
const ImageWrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	overflow: hidden;
	@media ${devices.tablet} {
		display: grid;
		grid-template-columns: 330px 330px;
		grid-gap: 20px;
		justify-content: center;
		align-items: center;
	}
	@media ${devices.largeLaptop} {
		overflow: visible;
		display: flex;
		position: relative;
		width: 500px;
		height: 500px;
	}
`;
const CityOverviewImage = styled(Image)`
	margin: 0 0 28px 0;
	@media ${devices.tablet} {
		width: 327px;
		height: 378px;
	}
	@media ${devices.largeLaptop} {
		position: absolute;
		width: 282px;
		height: 263px;
		margin: 0;
		right: 400px;
		bottom: 200px;
	}
`;
const CityscapeViewImage = styled(Image)`
	margin: 0 0 28px 0;
	@media ${devices.tablet} {
		width: 327px;
	}
	@media ${devices.largeLaptop} {
		position: absolute;
		width: 377px;
		height: 221px;
		top: 320px;
		right: 400px;
	}
`;
const BeachSunsetImage = styled(Image)`
	margin: 0 0 28px 0;
	@media ${devices.tablet} {
		width: 327px;
		height: 378px;
	}
	@media ${devices.largeLaptop} {
		position: absolute;
		width: 282px;
		height: 263px;
		top: 370px;
		left: 120px;
	}
`;
const DiningSceneImage = styled(Image)`
	margin: 0 0 28px 0;
	@media ${devices.tablet} {
		width: 327px;
	}
	@media ${devices.largeLaptop} {
		position: absolute;
		width: 377px;
		height: 221px;
		top: 132px;
		left: 120px;
	}
`;

const BrisBaneCity = () => {
	return (
		<Container>
			<CityWrapper>
				<BoldText>Brisbane</BoldText>
				<Subtitle>the beautiful City</Subtitle>
				<CityTitle>{cityInformation.Brisbane.title}</CityTitle>
				<CityDescription>{cityInformation.Brisbane.description}</CityDescription>
			</CityWrapper>
			<ImageWrapper>
				<CityOverviewImage
					src={CityOverview.src}
					alt="Brisbane City Overview"
					width={327}
					height={305}
					loader={imageLoader}
					unoptimized
					priority
				/>
				<CityscapeViewImage
					src={CityscapeView.src}
					alt="Brisbane Cityscape View"
					width={327}
					height={192}
					loader={imageLoader}
					unoptimized
					priority
				/>
				<BeachSunsetImage
					src={BeachSunset.src}
					alt="Brisbane Beach Sunset"
					width={327}
					height={305}
					loader={imageLoader}
					unoptimized
					priority
				/>
				<DiningSceneImage
					src={DiningScene.src}
					alt="Dining Scene"
					width={327}
					height={192}
					loader={imageLoader}
					unoptimized
					priority
				/>
			</ImageWrapper>
		</Container>
	);
};

export default BrisBaneCity;
