import styled from 'styled-components';

import MainContents from '@/components/Pages/Exhibitor/MainContents';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header/Header';
import PageHead from '@/layouts/PageHead';

const Cover = styled.div`
	background-color: #000;
`;
interface Meta {
	title: string;
}

const ExhibitorPage = () => {
	const meta: Meta = {
		title: 'AI + Web3 Convention 2024 | Exhibitor'
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

export default ExhibitorPage;
