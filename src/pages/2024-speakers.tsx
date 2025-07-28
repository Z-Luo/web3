import React from 'react';
import styled from 'styled-components';

import JudgeTeam from '@/components/Pages/Hackathon/JudgeTeam';
import teamMemberListHome from '@/components/Pages/Home/HomeJudgeTeam/teamMemberList.json';
import PageCoverTitle from '@/components/Shares/PageCoverTitle';
import coverText from '@/components/Shares/PageCoverTitle/speakersCoverText.json';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import PageHead from '@/layouts/PageHead';
import { devices } from '@/styles/variables';

const Cover = styled.div`
	background-image: url('/images/background/2024-speakers-bg.png');
	background-position: center;
	background-size: cover;
	height: 478px;
	margin: 0 auto;
	@media ${devices.mobile} {
		height: 360px;
	}
`;

const Speakers = () => {
	const meta = {
		title: 'AI + Web3 Convention 2024 | Speakers'
	};
	return (
		<>
			<PageHead meta={meta} />
			<Cover>
				<Header />
				<PageCoverTitle coverText={coverText} />
			</Cover>
			<JudgeTeam subtitle="AI + Web3 Convention 2024" teamMemberList={teamMemberListHome} />
			<Footer />
		</>
	);
};

export default Speakers;
