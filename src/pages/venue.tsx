import styled from 'styled-components';

import BrisBaneCity from '@/components/Pages/Venue/BrisbaneCity';
import GoldCoastCity from '@/components/Pages/Venue/GoldCoastCity';
// import VenueMap from '@/components/Pages/Venue/Map';
import VenueGallery from '@/components/Pages/Venue/VenueGallery';
import VenueIntroCards from '@/components/Pages/Venue/VenuIntroCards/VenueIntroCards';
import PageBanner from '@/components/Shares/PageBanner';
import bannerInfo from '@/components/Shares/PageBanner/venueBannerInfo.json';
import PageCoverTitle from '@/components/Shares/PageCoverTitle';
import coverText from '@/components/Shares/PageCoverTitle/venueCoverText.json';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import PageHead from '@/layouts/PageHead';
import { devices } from '@/styles/variables';

const Cover = styled.div`
	background-image: url('/images/demo/venuePage/coverMobile.jpg');
	background-position: center;
	background-size: cover;
	height: 478px;
	position: relative;
	@media ${devices.mobile} {
		background-image: url('/images/demo/venuePage/newCover.jpg');
		height: 360px;
		background-size: auto;
	}
`;

const HeaderContainer = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 2;
`;

const TitleContainer = styled.div`
	height: inherit;
	@media ${devices.mobile} {
		padding-top: 40px;
	}
`;

const VenuePage = () => {
	const meta = {
		title: 'AI + Web3 Convention 2024 | Venue'
	};
	const buttonConfig = {
		text: 'BOOK TICKETS',
		url: 'https://w3con.eventsair.com/web3convention/registration/Site/Register',
		extra: 'Interested in partnering? business@web3convention.com'
	};
	return (
		<>
			<PageHead meta={meta} />
			<Cover>
				<HeaderContainer>
					<Header />
				</HeaderContainer>
				<TitleContainer>
					<PageCoverTitle coverText={coverText} />
				</TitleContainer>
			</Cover>
			<VenueIntroCards />
			<PageBanner bannerInfo={bannerInfo} buttonConfig={buttonConfig} />
			<VenueGallery />
			<BrisBaneCity />
			<GoldCoastCity />
			{/* <VenueMap /> // hide the map temporarily */}
			<Footer />
		</>
	);
};

export default VenuePage;
