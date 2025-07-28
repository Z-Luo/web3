import Image from 'next/image';
import styled from 'styled-components';

import attenndReason from './attenndReason.json';
import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const Container = styled.div`
	background-color: ${color.blackColor};
	padding: 24px;
	width: 100%;
`;
const ContentWrapper = styled.div`
	margin: 0 auto;
	margin-bottom: 113px;
	max-width: 1440px;
	width: 100%;
	@media ${devices.tablet} {
		padding: 0 40px;
	}
	@media ${devices.largeLaptop} {
	}
`;
const Title = styled.h2`
	color: ${color.whiteColor};
	font-size: 40px;
	font-weight: bold;
	margin-bottom: 82px;
`;
const StyledGridContainer = styled.div`
	display: grid;
	gap: 50px;
	position: relative;
	@media ${devices.tablet} {
		column-gap: 40px;
		row-gap: 60px;
		grid-template-columns: repeat(2, 1fr);
	}
	@media ${devices.largeLaptop} {
		column-gap: 60px;
		row-gap: 66px;
		grid-template-columns: repeat(3, 360px);
	}
`;
const StyledGridItem = styled.div`
	background-color: #131313;
	border-radius: 4px;
	height: 354px;
	max-width: 360px;
	padding: 20px 14px;
	position: relative;
	@media ${devices.largeLaptop} {
		padding: 47px 24px 31px;
	}
`;
const SubTitle = styled.p`
	color: ${color.whiteColor};
	font-size: 20px;
	font-weight: bold;
	margin: 0 0 24px;
`;
const Description = styled.p`
	color: ${color.whiteColor};
	font-size: 16px;
	line-height: 1.5;
	margin: 0;
`;
const StyledNumber = styled.span`
	color: ${color.primaryColor};
	font-size: 56px;
	font-weight: bold;
	position: absolute;
	top: -35px;
`;
const StyledImage = styled(Image)`
	display: none;
	@media ${devices.largeLaptop} {
		display: block;
		position: absolute;
		bottom: 100px;
		left: 591px;
	}
`;

const ReasonsToAttend = () => {
	return (
		<Container>
			<ContentWrapper>
				<Title>10 Main Reasons to Attend</Title>
				<StyledGridContainer>
					{attenndReason.map(reason => (
						<StyledGridItem key={reason.id}>
							<StyledNumber>{reason.id}</StyledNumber>
							<SubTitle>{reason.title}</SubTitle>
							<Description>{reason.description}</Description>
						</StyledGridItem>
					))}
					<StyledImage
						loader={imageLoader}
						unoptimized
						src="images/demo/whySponsorPage/web3-convention-icon.png"
						alt="logo"
						width={444}
						height={141}
						priority
					/>
				</StyledGridContainer>
			</ContentWrapper>
		</Container>
	);
};

export default ReasonsToAttend;
