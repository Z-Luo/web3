import React from 'react';
import styled from 'styled-components';

import FeaturedEvents from '@/components/Pages/Side-Event/FeaturedEvents';
import MoreEvents from '@/components/Pages/Side-Event/MoreEvents';
import coverText from '@/components/Shares/PageCoverTitle/generalEventsCoverText.json';
import SideEventCoverTitle from '@/components/Shares/PageCoverTitle/SideEventCoverTitle';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header/Header';
import PageHead from '@/layouts/PageHead/PageHead';
import { devices } from '@/styles/variables';

const Cover = styled.div`
	background-image: url('/images/background/generalEventsHeaderBG.png');
	background-position: center;
	background-size: cover;
	height: 478px;
	letter-spacing: 0.78px;
	@media ${devices.mobile} {
		background-image: url('/images/background/generalEventsHeaderBG.png');
		height: 360px;
		background-size: auto;
	}
`;
const SideEventPage = () => {
	const meta = {
		description:
			'Web3 Hackathon is Australia most premier annual hackathon event catered to a global audience to support the next generation of Web3 innovation and products.',
		keywords:
			'University Hackathon, Web3 Hackathon, Web3, Blockchain, NFT, Whale Yacht Party, Pitch Space',
		title: 'Web3 Hackathon, AI + Web3 Convention 2024 | April, 2024 | Stages'
	};
	return (
		<>
			<PageHead meta={meta} />
			<Cover>
				<Header />
				<SideEventCoverTitle coverText={coverText} />
			</Cover>
			<FeaturedEvents />
			<MoreEvents />
			<Footer />
		</>
	);
};

export default SideEventPage;
