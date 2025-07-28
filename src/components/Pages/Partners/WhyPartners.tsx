import { Box, Grid } from '@mui/material';
import styled from 'styled-components';

import ThemeButton from '@/components/Shares/ThemeButton';
import { backdrop, sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';

const WhyPartnersContainer = styled(Box)`
	position: relative;
`;
const Container = styled.div`
	margin: 0 auto;
	max-width: 1200px;
	padding: 90px 24px 120px;
	@media ${devices.laptop} {
		padding: 50px 20px 120px;
	}
`;
const Backdrop = styled.div`
	${backdrop};
	font-size: 70px;
	left: 24px;
	top: -10px;
	z-index: -1;
	@media ${devices.laptop} {
		font-size: 200px;
		left: calc((100% - 1200px) / 2);
		top: -50px;
	}
`;
const SectionTitle = styled.h2`
	${sectionTitle};
	margin-bottom: 20px;
	max-width: fit-content;
	@media ${devices.laptop} {
		margin-bottom: 64px;
	}
`;
const SectionSubtitle = styled.p`
	${sectionSubtitle};
`;

const Description = styled.p`
	font-size: 16px;
`;
// grid
const WhyGrid = styled(Grid)`
	margin-top: 56px;
`;
const GridItem = styled(Grid)<{ color: string; bgcolor: string }>`
	background-color: ${props => props.bgcolor || ''};
	border: solid 1px ${color.blackColor};
	color: ${props => props.color || ''};
	padding: 24px;
	padding-bottom: 76px;
`;
const WhyItemTitle = styled.h3`
	font-size: 22px;
	font-weight: bold;
	line-height: 22px;
	margin: 0 0;
`;
const WhyItemContent = styled.p`
	font-size: 16px;
`;
const ViewMore = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	margin-top: 56px;
	@media ${devices.laptop} {
		margin-bottom: 0;
	}
`;

const whyGridData = [
	{
		id: '1',
		title: 'Brand Awareness',
		content:
			'Share your brand’s story with a global audience. Convention welcomes journalists from the world’s leading publications to give your company unparalleled reach. Our bespoke partner packages allow you to introduce yourself to our attendees in the way you want.'
	},
	{
		id: '2',
		title: 'Thought Leadership',
		content:
			'Show the world that your company is one step ahead. Place your brand at the forefront of an industry issue, launch a new product, or lead a masterclass or roundtable. Convention secures your spot at the discussions that matter most to your company.'
	},
	{
		id: '3',
		title: 'Networking',
		content:
			'Our event is designed to offer unrivalled networking opportunities. It’s easier than ever to make the connections that matter. Find the people leading your industry, search for your next hire, or start a conversation with a future business partner.'
	},
	{
		id: '4',
		title: 'Lead Generation',
		content:
			'Convention attendees are the people choosing the must-have products and technologies. They’re experts in their fields, and they know the next big thing when they see it. Could that be your company’s product?'
	}
];

const WhyPartners = () => {
	return (
		<WhyPartnersContainer>
			<Container>
				<Backdrop>Why</Backdrop>
				<SectionSubtitle>AI + Web3 Convention 2024</SectionSubtitle>
				<SectionTitle>Why Partners with AI + Web3 Convention?</SectionTitle>
				<Description>
					AI + Web3 Convention 2024 is set to bring together the foremost minds,
					innovators, and visionaries in the realms of Artificial Intelligence, Web3, and
					beyond. Building upon the success of previous conventions, we&apos;re poised to
					create an even more impactful experience.
				</Description>
				<Description>
					Express your interest today and be a part of pioneering creative breakthroughs
					and shaping the future. With a comprehensive lineup including conferences,
					expos, networking events, and more, AI + Web3 Convention 2024 offers abundant
					opportunities for engagement and participation.
				</Description>
				<WhyGrid container>
					{whyGridData.map((item, index) => (
						<GridItem
							miniMobile={12}
							laptop={6}
							largeLaptop={3}
							key={item.id}
							bgcolor={index % 2 === 0 ? color.blackColor : color.whiteColor}
							color={index % 2 === 0 ? color.whiteColor : color.blackColor}
						>
							<WhyItemTitle>{item.title}</WhyItemTitle>
							<WhyItemContent>{item.content}</WhyItemContent>
						</GridItem>
					))}
				</WhyGrid>
				<ViewMore>
					<ThemeButton href="/why-sponsor">VIEW MORE</ThemeButton>
				</ViewMore>
			</Container>
		</WhyPartnersContainer>
	);
};

export default WhyPartners;
