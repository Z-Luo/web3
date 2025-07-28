import styled from 'styled-components';

import TermsAndConditions from '@/components/Pages/TermsAndConditions';
import PageCoverTitle from '@/components/Shares/PageCoverTitle';
import coverText from '@/components/Shares/PageCoverTitle/termsAndConditionsText.json';
import Footer from '@/layouts/Footer/Footer';
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

const TermsAndConditionPage = () => {
	const meta = {
		title: 'Web3 Convention Ticket Purchase Terms and Conditions'
	};
	return (
		<>
			<PageHead meta={meta} />
			<Cover>
				<Header />
				<PageCoverTitle coverText={coverText} />
			</Cover>
			<TermsAndConditions />
			<Footer />
		</>
	);
};
export default TermsAndConditionPage;
