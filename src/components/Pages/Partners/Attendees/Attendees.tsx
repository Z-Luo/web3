import styled from 'styled-components';

import CounterSlider from '@/components/Shares/CounterSlider';
import { backdrop, sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { color, devices, sizes } from '@/styles/variables';

const { blackColor } = color;

const HomeCountdownContainer = styled.div`
	position: relative;
`;

const Content = styled.div`
	margin: 0 auto;
	max-width: 1200px;
	padding: 140px 24px 100px;
	position: relative;
	@media ${devices.mobile} {
		padding: 140px 20px 100px;
	}
	@media ${devices.laptop} {
		margin: 0 auto;
	}
`;

const TitleContainer = styled.div`
	color: ${blackColor};
	@media ${devices.laptop} {
		margin-right: 80px;
		margin-bottom: 60px;
		max-width: ${`${sizes.largeLaptop}px`};
	}
`;

const Title = styled.h2`
	${sectionTitle};
	margin-bottom: 20px;
	max-width: 264px;
	@media ${devices.mobile} {
		max-width: 100%;
	}
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
const Backdrop = styled.div`
	${backdrop};
	font-size: 70px;
	left: 24px;
	top: 25px;
	@media ${devices.laptop} {
		font-size: 230px;
		left: calc((100% - 1200px) / 2);
	}
`;

const Attendees: React.FC = () => {
	return (
		<HomeCountdownContainer>
			<Content>
				<TitleContainer>
					<Backdrop>Who</Backdrop>
					<Subtitle>AI + Web3 Convention 2024</Subtitle>
					<Title>Who Attends AI + Web3 Convention?</Title>
				</TitleContainer>
				<CounterSlider counterList={counterList} theme="light" />
			</Content>
		</HomeCountdownContainer>
	);
};

export default Attendees;
