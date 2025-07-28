import styled from 'styled-components';

import TravelCoverTitle from '@/components/Pages/Travel/CoverTitle';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import PageHead from '@/layouts/PageHead';
import { devices } from '@/styles/variables';

const Cover = styled.div`
	background-image: url('/images/travel-background.png');
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

const TravelPage = () => {
	const meta = {
		title: 'AI + Web3 Convention 2024 | Travel'
	};
	return (
		<>
			<PageHead meta={meta} />
			<Cover>
				<Header />
				<TravelCoverTitle />
			</Cover>
			<Footer />
		</>
	);
};

export default TravelPage;
