import styled from 'styled-components';

import CounterSlider from '@/components/Shares/CounterSlider';
import { sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { color, devices, sizes } from '@/styles/variables';

const { blackColor, whiteColor } = color;

const HomeCountdownContainer = styled.div`
	background-color: ${blackColor};
`;

const Content = styled.div`
	max-width: ${`${sizes.largeLaptop}px`};
	padding: 100px 40px 140px;
	position: relative;
	@media ${devices.mobile} {
		padding: 100px 60px 140px;
	}
	@media ${devices.laptop} {
		margin: 0 auto;
	}
`;

const TitleContainer = styled.div`
	color: ${whiteColor};
	margin-bottom: 60px;
	@media ${devices.laptop} {
		margin-right: 80px;
		margin-bottom: 0;
		max-width: ${`${sizes.largeLaptop}px`};
	}
`;

const Title = styled.h2`
	${sectionTitle};
	max-width: unset;
`;

const Subtitle = styled.p`
	${sectionSubtitle};
`;

const counterList = [
	{
		name: 'Prizes(AUD)',
		count: 100000
	},
	{
		name: 'Sponsors',
		count: 10
	},
	{
		name: 'Judges and Mentors',
		count: 20
	}
];

const WhyHackathon: React.FC = () => {
	return (
		<HomeCountdownContainer>
			<Content>
				<TitleContainer>
					<Subtitle>Web3 Hackathon 2023</Subtitle>
					<Title>Why Web3 Hackathon?</Title>
				</TitleContainer>
				<CounterSlider counterList={counterList} />
			</Content>
		</HomeCountdownContainer>
	);
};

export default WhyHackathon;
