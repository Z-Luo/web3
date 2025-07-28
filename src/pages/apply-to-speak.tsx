import styled from 'styled-components';

import StageCoverTitle from '@/components/Pages/Apply-To-Speak/CoverTitle';
import MainContents from '@/components/Pages/Apply-To-Speak/MainContents/MainContents';
import Footer from '@/layouts/Footer/Footer';
import Header from '@/layouts/Header/Header';
import PageHead from '@/layouts/PageHead/PageHead';
import { devices } from '@/styles/variables';

const Cover = styled.div`
	background-image: url('/images/background/applyToSpeakHeaderBG.png');
	background-position: center;
	background-size: cover;
	@media ${devices.miniMobile} {
		height: 478px;
	}
	@media ${devices.largerLaptop} {
		height: 360px;
	}
`;

const ApplyToSpeakPage = () => {
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
				<StageCoverTitle />
			</Cover>
			<MainContents />
			<Footer />
		</>
	);
};
export default ApplyToSpeakPage;
