import React from 'react';
import styled from 'styled-components';

import AntiHarassment from '@/components/Pages/AntiHarassment/AntiHarassment';
import PageCoverTitle from '@/components/Pages/AntiHarassment/CoverTitle';
import coverText from '@/components/Pages/AntiHarassment/CoverTitle/antiHarassmentText.json';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header/Header';
import PageHead from '@/layouts/PageHead/PageHead';
import { devices } from '@/styles/variables';

const Cover = styled.div`
	background-image: url('/images/background/anti-harassment-and-condition-policy.png');
	background-position: center;
	background-size: cover;
	height: 478px;
	@media ${devices.mobile} {
		background-image: url('/images/background/anti-harassment-and-condition-policy.png');
		height: 360px;
		background-size: auto;
	}
`;
const AntiHarassmentPage = () => {
	return (
		<>
			<PageHead />
			<Cover>
				<Header />
				<PageCoverTitle coverText={coverText} />
			</Cover>
			<AntiHarassment />
			<Footer />
		</>
	);
};
export default AntiHarassmentPage;
