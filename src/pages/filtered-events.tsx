import styled from 'styled-components';

import MainContents from '@/components/Pages/FilteredEvents/MainContents';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header/Header';
import PageHead from '@/layouts/PageHead';
import { devices } from '@/styles/variables';

const Cover = styled.div`
	background-color: #000;
	@media ${devices.miniMobile} {
		height: 25vh;
	}
	@media ${devices.tablet} {
		height: 20vh;
	}
`;
const FilteredEventsPage = () => {
	const meta = {
		title: 'AI + Web3 Convention 2024 | Stages'
	};
	return (
		<>
			<PageHead meta={meta} />
			<Cover>
				<Header />
			</Cover>
			<MainContents />
			<Footer />
		</>
	);
};

export default FilteredEventsPage;
