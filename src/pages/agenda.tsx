import styled from 'styled-components';

import AgendaContent from '@/components/Pages/Agenda/AgendaContent';
import PageCoverTitle from '@/components/Shares/PageCoverTitle';
import coverText from '@/components/Shares/PageCoverTitle/agendaCoverText.json';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import PageHead from '@/layouts/PageHead';
import { devices } from '@/styles/variables';

const Cover = styled.div`
	background-image: url('/images/demo/venuePage/coverMobile.jpg');
	background-position: center;
	background-size: cover;
	height: 478px;
	position: relative;
	@media ${devices.mobile} {
		background-image: url('/images/demo/venuePage/newCover.jpg');
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

const AgendaPage = () => {
	const meta = {
		title: 'AI + Web3 Convention 2024 | Agenda'
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
			<AgendaContent />
			<Footer />
		</>
	);
};

export default AgendaPage;
