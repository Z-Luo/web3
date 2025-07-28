import styled from 'styled-components';

import { sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { color, devices, sizes } from '@/styles/variables';

const { blackColor, primaryColor, whiteColor } = color;

const OverviewContainer = styled.div`
	background-color: ${blackColor};
	padding: 24px;
	width: 100%;
`;

const ContentWrapper = styled.div`
	margin: 96px auto;
	max-width: 1440px;
	width: 100%;
	@media ${devices.tablet} {
		padding: 0 40px;
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
	color: ${whiteColor};
	margin-bottom: 20px;
	max-width: 264px;
	@media ${devices.mobile} {
		max-width: 100%;
	}
`;

const Subtitle = styled.p`
	${sectionSubtitle};
`;

const Description = styled.p`
	color: ${whiteColor};
	font-weight: bold;
	line-height: 1.5;
	margin-bottom: 24px;
`;
const Information = styled.p`
	color: ${whiteColor};
	line-height: 24px;
	margin-bottom: 24px;
`;

const TitleHelper = styled.span`
	color: ${primaryColor};
	font-weight: bold;
`;

const Overview = () => {
	return (
		<OverviewContainer>
			<ContentWrapper>
				<TitleContainer>
					<Subtitle>AI + Web3 Convention 2024</Subtitle>
					<Title>Overview</Title>
				</TitleContainer>
				<Description>
					To provide a platform for budding entrepreneurs to showcase their AI and Web3
					innovations, and to connect them with leading venture capital firms and
					investors for potential collaboration and investment.
				</Description>
				<Information>
					<TitleHelper>Date:</TitleHelper> 18-19 May, 2024
				</Information>
				<Information>
					<TitleHelper>Vision:</TitleHelper> &quot;To scout, nurture, and elevate the
					brightest and most innovative minds in the AI & Web3 landscape. &quot;
				</Information>
				<Information>
					<TitleHelper>Opportunity:</TitleHelper> &quot;AI & Web3 are more than
					buzzwords—they&apos;re shaping the next epoch of technological innovation. By
					sponsoring, VCs play a pivotal role in catalysing this wave. &quot;
				</Information>
			</ContentWrapper>
		</OverviewContainer>
	);
};

export default Overview;
