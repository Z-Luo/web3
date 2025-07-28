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
		name: 'Online Attendees',
		count: 10000
	},
	{
		name: 'Onsite Attendees',
		count: 5000
	},
	{
		name: 'University Students',
		count: 2000
	},
	{
		name: 'Exhibitors',
		count: 100
	},
	{
		name: 'Venture Capitalists',
		count: 100
	},
	{
		name: 'Creators',
		count: 100
	},
	{
		name: 'Influencers',
		count: 100
	},
	{
		name: 'Speakers',
		count: 200
	}
];

const HomeCounter: React.FC = () => {
	return (
		<HomeCountdownContainer>
			<Content>
				<TitleContainer>
					<Subtitle>AI + Web3 Convention 2024</Subtitle>
					<Title>Who attends AI + Web3 Convention?</Title>
				</TitleContainer>
				<CounterSlider counterList={counterList} />
			</Content>
		</HomeCountdownContainer>
	);
};

export default HomeCounter;
