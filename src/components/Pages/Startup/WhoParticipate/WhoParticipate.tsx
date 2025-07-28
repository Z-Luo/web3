import Image from 'next/image';
import styled from 'styled-components';

import whoParticipateData from './whoParticipateData.json';
import { sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { color, devices, sizes } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { blackColor, primaryColor, whiteColor } = color;

const WhoParticipateContainer = styled.div`
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

const InformationContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	justify-content: space-between;

	@media ${devices.laptop} {
		flex-direction: row;
	}
`;

const DescriptionContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const DescriptionWrapper = styled.div`
	margin-bottom: 32px;
`;

const DescriptionTitle = styled.div`
	color: ${primaryColor};
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 16px;
`;

const Description = styled.div`
	color: ${whiteColor};
`;

const StyledImage = styled(Image)`
	object-fit: contain;
	@media ${devices.mobile} {
		width: 400px;
		height: 210px;
	}
	@media ${devices.laptop} {
		width: 600px;
		height: 320px;
	}
`;

const WhoParticipate = () => {
	return (
		<WhoParticipateContainer>
			<ContentWrapper>
				<TitleContainer>
					<Subtitle>AI + Web3 Convention 2024</Subtitle>
					<Title>Who Participate</Title>
				</TitleContainer>
				<InformationContainer>
					<DescriptionContainer>
						{whoParticipateData.map(item => (
							<DescriptionWrapper key={item.id}>
								<DescriptionTitle>{item.title}</DescriptionTitle>
								<Description>{item.description}</Description>
							</DescriptionWrapper>
						))}
					</DescriptionContainer>
					<StyledImage
						loader={imageLoader}
						src="/images/startup/who-participate.png"
						alt="who participate"
						unoptimized
						width={280}
						height={150}
					/>
				</InformationContainer>
			</ContentWrapper>
		</WhoParticipateContainer>
	);
};

export default WhoParticipate;
