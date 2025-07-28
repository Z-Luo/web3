import { Box, Grid } from '@mui/material';
import styled from 'styled-components';

import { backdrop, sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';

const NextStepsContainer = styled(Box)`
	position: relative;
`;
const Container = styled.div`
	margin: 46px auto;
	max-width: 1200px;
	padding: 90px 24px 120px;
	@media ${devices.laptop} {
		padding: 50px 20px;
		margin: 80px auto;
	}
`;

const Backdrop = styled.div`
	${backdrop};
	font-size: 70px;
	left: 24px;
	top: -10px;
	z-index: -1;
	@media ${devices.laptop} {
		font-size: 230px;
		left: calc((100% - 1200px) / 2);
		top: -50px;
	}
`;

const SectionTitle = styled.h2`
	${sectionTitle};
	margin-bottom: 60px;
	max-width: fit-content;
	@media ${devices.laptop} {
		margin-bottom: 130px;
	}
`;

const SectionSubtitle = styled.p`
	${sectionSubtitle};
`;

// grid
const GridItem = styled(Grid)`
	background-color: #f7f7f7;
	min-height: 320px;
	padding: 44px 24px;
	position: relative;
`;

const OrdinalNumber = styled.span`
	color: ${color.primaryColor};
	font-size: 56px;
	font-weight: bold;
	left: 24px;
	position: absolute;
	top: -32px;
`;

const GridItemTitle = styled.h3`
	font-size: 22px;
	font-weight: bold;
	line-height: 1;
	margin: 0;
	margin-bottom: 24px;
`;

const GridItemContent = styled.p`
	font-size: 16px;
	line-height: 1.5;
	margin: 0;
`;

const GridData = [
	{
		id: '1',
		title: 'Consultation with Our Partner Specialists',
		content:
			'Talk through your objectives with a member of our team and find out what convention can offer you.'
	},
	{
		id: '2',
		title: 'Design a Bespoke Package',
		content:
			'Our partner team will design a bespoke partner experience around your goals, making sure your company maximises its time at convention.'
	},
	{
		id: '3',
		title: 'Prepare with Our Partner Success Team',
		content:
			'Your dedicated partner success manager will work with you from beginning to end, ensuring you get everything you’re looking for from your convention partnership.'
	},
	{
		id: '4',
		title: 'Time for Convention Onsite',
		content:
			'Ready, set, go. Reach out to business partners, find new customers, or be inspired by hours of premium content. There’s a lot to experience, and our team is here to help your company make the most of it.'
	}
];

const NextSteps = () => {
	return (
		<NextStepsContainer>
			<Container>
				<Backdrop>Steps</Backdrop>
				<SectionSubtitle>AI + Web3 Convention 2024</SectionSubtitle>
				<SectionTitle>Next Steps</SectionTitle>
				<Grid
					container
					spacing={{
						mobile: 5,
						largeLaptop: 2.5
					}}
				>
					{GridData.map(item => (
						<Grid item miniMobile={12} laptop={6} largeLaptop={3} key={item.id}>
							<GridItem>
								<OrdinalNumber>{item.id.padStart(2, '0')}</OrdinalNumber>
								<GridItemTitle>{item.title}</GridItemTitle>
								<GridItemContent>{item.content}</GridItemContent>
							</GridItem>
						</Grid>
					))}
				</Grid>
			</Container>
		</NextStepsContainer>
	);
};

export default NextSteps;
