import styled from 'styled-components';

import StageCoverTitle from '@/components/Pages/Why-Attend/CoverTitle';
import ReasonsToSponsor from '@/components/Pages/Why-Attend/ReasonsToAttend';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import PageHead from '@/layouts/PageHead';
import { devices } from '@/styles/variables';

const Cover = styled.div`
	background-image: url('/images/demo/whySponsorPage/why-sponsor-cover.png');
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

const WhyAttendPage = () => {
	return (
		<>
			<PageHead />
			<Cover>
				<Header />
				<StageCoverTitle />
			</Cover>
			<ReasonsToSponsor />
			<Footer />
		</>
	);
};

export default WhyAttendPage;
