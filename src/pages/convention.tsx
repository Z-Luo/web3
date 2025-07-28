import styled from 'styled-components';

import StageCoverTitle from '@/components/Pages/Stages/CoverTitle/StageCoverTitle';
import MainContents from '@/components/Pages/Stages/MainContents';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import PageHead from '@/layouts/PageHead';
import { devices } from '@/styles/variables';

const Cover = styled.div`
	background-image: url('/images/mainstage.jpeg');
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: cover;
	@media ${devices.miniMobile} {
		height: 85vh;
	}
	@media ${devices.tablet} {
		height: 50vh;
	}
`;
const StagePage = () => {
	const meta = {
		title: 'AI + Web3 Convention 2024 | Stages'
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

export default StagePage;
