import React from 'react';
import ForSponsors from 'src/components/Pages/Startup/ForSponsors';
import styled from 'styled-components';

import HomeSponsor from '@/components/Pages/Home/HomeSponsor';
import EventAgenda from '@/components/Pages/Startup/EventAgenda';
import EventHighlights from '@/components/Pages/Startup/EventHighlights';
import ForEnterprise from '@/components/Pages/Startup/ForEnterprise';
import ForInvestors from '@/components/Pages/Startup/ForInvestors';
import ForStartUps from '@/components/Pages/Startup/ForStartUps';
import Opportunity from '@/components/Pages/Startup/Opportunity';
import Overview from '@/components/Pages/Startup/Overview';
import Prize from '@/components/Pages/Startup/Prize';
import Timeline from '@/components/Pages/Startup/Timeline';
import WhoParticipate from '@/components/Pages/Startup/WhoParticipate';
import PageCoverTitle from '@/components/Shares/PageCoverTitle';
import coverText from '@/components/Shares/PageCoverTitle/startupCoverText.json';
import ThemeButton from '@/components/Shares/ThemeButton';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import PageHead from '@/layouts/PageHead';
import { devices } from '@/styles/variables';

const Cover = styled.div`
	background-image: url('/images/background/startup-background.webp');
	background-position: center;
	background-size: cover;
	padding-top: 85px;
	position: relative;
	@media ${devices.mobile} {
		background-image: url('/images/background/startup-background.webp');
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

const Buttons = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-bottom: 100px;
	margin-top: 80px;
	@media ${devices.mobile} {
		:first-child {
			margin-bottom: 0;
		}
		margin-top: 48px;
	}
`;

const StartupPage = () => {
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
				<TitleContainer>
					<PageCoverTitle coverText={coverText}>
						<Buttons>
							<ThemeButton
								width="fit-content"
								href="https://build.bewater.xyz/en/campaigns/rK6E-AI-Web3-Convention--Startup-Competition"
							>
								Apply to Start-up Competition
							</ThemeButton>
							<ThemeButton
								width="fit-content"
								href="https://w3con.eventsair.com/web3convention/ati"
							>
								Investors Apply
							</ThemeButton>
						</Buttons>
					</PageCoverTitle>
				</TitleContainer>
			</Cover>
			<Overview />
			<EventHighlights />
			<HomeSponsor />
			<EventAgenda />
			<Prize />
			<Timeline />
			<WhoParticipate />
			<ForStartUps />
			<ForEnterprise />
			<ForInvestors />
			<ForSponsors />
			<Opportunity />
			<Footer />
		</>
	);
};

export default StartupPage;
