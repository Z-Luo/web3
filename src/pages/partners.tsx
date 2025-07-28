import React from 'react';
import styled from 'styled-components';

import Attendees from '@/components/Pages/Partners/Attendees';
import NextSteps from '@/components/Pages/Partners/NextSteps';
import PartnershipSponsorshipSegment from '@/components/Pages/Partners/PartnershipSponsorshipSegment';
import WhyPartners from '@/components/Pages/Partners/WhyPartners';
import PageCoverTitle from '@/components/Shares/PageCoverTitle';
import coverText from '@/components/Shares/PageCoverTitle/partnersCoverText.json';
import ThemeButton from '@/components/Shares/ThemeButton';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import PageHead from '@/layouts/PageHead';
import { devices } from '@/styles/variables';

const Cover = styled.div`
	background-image: url('/images/partners/coverMobile.webp');
	background-position: center;
	background-size: cover;
	padding-top: 85px;
	position: relative;
	@media ${devices.mobile} {
		background-image: url('/images/partners/cover.webp');
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
const Description = styled.p`
	font-size: 18px;
	margin-top: 32px;
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
		display: flex;
		flex-direction: row;
	}
`;

const PartnersPage = () => {
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
						<Description>
							Get in touch with our specialist team today to secure your partnership
							for 2024.
						</Description>
						<Buttons>
							<ThemeButton width="fit-content" href="/contact-us">
								ENQUIRE NOW
							</ThemeButton>
							<ThemeButton
								width="fit-content"
								href="https://w3con.eventsair.com/SponsorshipPortal/Account/Login?ReturnUrl=%2FSponsorshipPortal%2Fweb3convention%2Fsponsorship"
							>
								LOGIN WITH ACCOUNT
							</ThemeButton>
						</Buttons>
					</PageCoverTitle>
				</TitleContainer>
			</Cover>
			<Attendees />
			<WhyPartners />
			<PartnershipSponsorshipSegment />
			<NextSteps />
			<Footer />
		</>
	);
};

export default PartnersPage;
