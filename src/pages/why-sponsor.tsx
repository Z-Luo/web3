import styled from 'styled-components';

import StageCoverTitle from '@/components/Pages/Why-Sponsor/CoverTitle';
import JoinUsSection from '@/components/Pages/Why-Sponsor/JoinUs';
import ReasonsToSponsor from '@/components/Pages/Why-Sponsor/ReasonsToSponsor';
import SessionTypesSection from '@/components/Pages/Why-Sponsor/SessionTypesSection';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import PageHead from '@/layouts/PageHead';
import { devices } from '@/styles/variables';

const Cover = styled.div`
	background-image: url('/images/demo/whySponsorPage/why-sponsor-cover.png');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	@media ${devices.miniMobile} {
		height: 470px;
	}

	@media ${devices.desktop} {
		height: 500px;
	}
`;

const WhySponsorPage = () => {
	const meta = {
		description:
			"AI + Web3 Convention is an event to explore the future of Web 2 and Web 3 and will host in the best convention centre in Australia.  The convention aims to bridge the gap between Web2 and Web3 communities.Hosted in Australia's premier convention centre, attendees can take part in events focused on blockchain, Data & AI, cloud computing, startup pitching, digital transformation, venture capital.",
		keywords:
			'Web3Convention, Brisbane Convention and Exhibition Centre (BCEC), Web3, Blockchain, NFT, Whale Yacht Party, Pitch Space',
		title: 'AI + Web3 Convention 2024 | Why Sponsor Web3 Convention'
	};
	return (
		<>
			<PageHead meta={meta} />
			<Cover>
				<Header />
				<StageCoverTitle />
			</Cover>
			<SessionTypesSection />
			<ReasonsToSponsor />
			<JoinUsSection />
			<Footer />
		</>
	);
};

export default WhySponsorPage;
