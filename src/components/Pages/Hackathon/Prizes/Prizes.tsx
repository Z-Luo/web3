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
			<Title>Prizes</Title>
			<h3>$50,000 in Hackathon prizes</h3>
			<p>
				<strong>1st Place</strong>
			</p>
			<ul>
				<li>$16,000</li>
			</ul>
			<p>
				<strong>2nd Place</strong>
			</p>
			<ul>
				<li>$10,000</li>
			</ul>
			<p>
				<strong> 3rd Place</strong>
			</p>
			<ul>
				<li>$8,000</li>
			</ul>
			<p>
				<strong>
					16 special awards with a $1000 cash prize for the remaining top finalists
				</strong>
			</p>
		</ContentContainer>
	);
};

export default StageCoverTitle;
