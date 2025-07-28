/* eslint-disable prettier/prettier */
import styled from 'styled-components';

import { sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { devices, sizes } from '@/styles/variables';

const ContentContainer = styled.div`
	margin: auto;
	max-width: ${`${sizes.largeLaptop}px`};
	padding: 50px 30px 50px;
	@media ${devices.mobile} {
		padding: 50px 100px 50px;
	}
`;
const Title = styled.h2`
	${sectionTitle};
	max-width: unset;
`;
const Subtitle = styled.p`
	${sectionSubtitle};
`;

const Benefits = () => {
	return (
		<ContentContainer>
			<Subtitle>Web3 Hackathon 2023</Subtitle>
			<Title>Benefits</Title>
			<h3>Additional benefits for the finalists</h3>
			<ul>
				<li>Seed investment opportunities valued at upwards of $50,000</li>
			</ul>
			<ul>
				<li>Paid media consulting and exposure for the winning team; valued at $7,000</li>
			</ul>
			<ul>
				<li>
					Mentoring and technical advisory services for the top-3 ranked teams; valued at
					$25,000
				</li>
			</ul>
			<ul>
				<li>Much more to be announced soon. Watch this space.</li>
			</ul>
		</ContentContainer>
	);
};

export default Benefits;
