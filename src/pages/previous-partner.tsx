import styled from 'styled-components';

import PreviousPartnerSection from '@/components/Pages/PreviousPartner/PreviousPartnerSection';
import PageCoverTitle from '@/components/Shares/PageCoverTitle';
import coverText from '@/components/Shares/PageCoverTitle/previousPartnerCoverText.json';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import PageHead from '@/layouts/PageHead';
import { devices } from '@/styles/variables';

const Cover = styled.div`
	background-image: url('/images/demo/previousPartnerPage/partner-cover.png');
	background-position: center;
	background-size: cover;
	height: 478px;
	position: relative;
	@media ${devices.mobile} {
		background-image: url('/images/demo/previousPartnerPage/partner-cover.png');
		height: 360px;
	}
`;

const HeaderContainer = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 2;
`;

const PreviousPartnerPage = () => {
	const meta = {
		title: 'AI + Web3 Convention 2024 | Previous-Partner'
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
			<PreviousPartnerSection />
			<Footer />
		</>
	);
};

export default PreviousPartnerPage;
