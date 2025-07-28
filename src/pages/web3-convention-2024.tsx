import React from 'react';
import styled from 'styled-components';

import ConventionEvents from '@/components/Pages/ConventionEvents';
import PageCoverTitle from '@/components/Shares/PageCoverTitle';
import coverText from '@/components/Shares/PageCoverTitle/web3Convention2024Text.json';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header/Header';
import PageHead from '@/layouts/PageHead/PageHead';
import { devices } from '@/styles/variables';

const Cover = styled.div`
	background-image: url('/images/background/web3Convention2024BG.png');
	background-position: center;
	background-size: cover;
	height: 478px;
	letter-spacing: 0.78px;
	position: relative;
	@media ${devices.mobile} {
		background-image: url('/images/background/web3Convention2024BG.png');
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

const Web3Convention2024Page = () => {
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
				<HeaderContainer>
					<Header />
				</HeaderContainer>
				<PageCoverTitle coverText={coverText} />
			</Cover>
			<ConventionEvents />
			<Footer />
		</>
	);
};

export default Web3Convention2024Page;
