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

const StageCoverTitle = () => {
	return (
		<ContentContainer>
			<Subtitle>Web3 Hackathon 2023</Subtitle>
			<Title>JUDGING CRITERIA</Title>
			<p>
				<strong>Originality / Uniqueness</strong>
			</p>
			<ul>
				<li>Has this project been done before? Is it unique?</li>
			</ul>
			<p>
				<strong>Technicality</strong>
			</p>
			<ul>
				<li>
					How difficult is the problem you are solving? How many moving parts? Did you
					build it efficiently? Did you give it too many moving parts? How clean is the
					code?
				</li>
			</ul>
			<p>
				<strong>User Experience / Aesthetics</strong>
			</p>
			<ul>
				<li>
					How useable is your project? Does it look nice? Does it accomplish what it is
					set out to do in an easy to use and approachable way?
				</li>
			</ul>
			<p>
				<strong>Potential Impact</strong>
			</p>
			<ul>
				<li>How big of an impact could the project have for the future?</li>
			</ul>
			<p>
				<strong>Practicality</strong>
			</p>
			<ul>
				<li>
					Is this something people will want to use? Does this have business value? Is
					this something that could grow and have a mass following?
				</li>
			</ul>
			<p>
				<strong>Presentation</strong>
			</p>
			<ul>
				<li>How good was the project presentation?</li>
			</ul>
		</ContentContainer>
	);
};

export default StageCoverTitle;
