import styled from 'styled-components';

import PageCoverTitle from '@/components/Shares/PageCoverTitle';
import coverText from '@/components/Shares/PageCoverTitle/ticketCoverText.json';
import PageParallax from '@/components/Shares/PageParallax';
import PageTicket from '@/components/Shares/PageTicket';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import PageHead from '@/layouts/PageHead';

const Cover = styled.div`
	background-image: url('/images/demo/ticketPage/ticketPageCover.jpeg');
	background-position: center;
	background-size: cover;
	height: 50vh;
	position: relative;
`;

const BackgroundBanner = styled.div`
	background-color: #f8f6f6;
	display: grid;
	max-height: 100%;
`;

const HeaderContainer = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 2;
`;

const GetTicketsPage = () => {
	const meta = {
		description:
			'AI + Web3 Convention is an event to explore the future of Web 2 and Web 3 and will host in the best convention centre in Australia.  The convention aims to bridge the gap between Web2 and Web3 communities.',
		title: 'AI + Web3 Convention 2024 | May 18th 2024 | Tickets'
	};
	return (
		<>
			<PageHead meta={meta} />
			<BackgroundBanner>
				<Cover>
					<HeaderContainer>
						<Header />
					</HeaderContainer>
					<PageCoverTitle coverText={coverText} />
				</Cover>
			</BackgroundBanner>
			<PageTicket />
			<PageParallax />
			<Footer />
		</>
	);
};

export default GetTicketsPage;
