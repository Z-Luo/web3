import React from 'react';
import styled from 'styled-components';

import ContactTable from '@/components/Pages/ContactUs/ContactTable';
import PageCoverTitle from '@/components/Shares/PageCoverTitle';
import coverText from '@/components/Shares/PageCoverTitle/contactUsCoverText.json';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header/Header';
import PageHead from '@/layouts/PageHead/PageHead';
import { devices } from '@/styles/variables';

const Cover = styled.div`
	background-image: url('/images/background/contact-us-background.png');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 478px;
	@media ${devices.mobile} {
		height: 360px;
	}
`;
const HeaderContainer = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 2;
`;
const ContactUsPage = () => {
	const meta = {
		title: 'AI + Web3 Convention 2024 | Contact Us'
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
			<ContactTable />
			<Footer />
		</>
	);
};

export default ContactUsPage;
