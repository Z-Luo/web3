import styled from 'styled-components';

import { color, devices } from '@/styles/variables';

const Container = styled.div`
	background-color: ${color.blackColor};
	padding: 24px;
	@media ${devices.largeLaptop} {
		height: 700px;
		position: relative;
		padding: 150px 16px;
	}
`;
const BoldText = styled.p`
	color: ${color.whiteColor};
	font-size: 70px;
	font-weight: bold;
	margin-bottom: 16px;
	margin-top: 0;
	opacity: 0.11;
	@media ${devices.largeLaptop} {
		position: absolute;
		top: 456px;
		right: 80px;
		font-size: 230px;
	}
`;
const ImageContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	@media ${devices.largeLaptop} {
		flex-direction: row;
		justify-content: space-evenly;
		width: 100%;
	}
`;
const ImageWrapper = styled.div`
	height: 300px;
	max-width: 400px;
	overflow: hidden;
`;
const StyledImage = styled.img`
	height: auto;
	width: 100%;
`;
const VenueGallery = () => {
	return (
		<Container>
			<BoldText>BCEC</BoldText>
			<ImageContainer>
				<ImageWrapper>
					<StyledImage
						src="/images/venue/brisbane-concert-lights.jpg"
						alt="Dinner"
						width={327}
						height={283}
					/>
				</ImageWrapper>
				<ImageWrapper>
					<StyledImage
						src="/images/venue/brisbane-trade-show.jpg"
						alt="Presentation"
						width={327}
						height={283}
					/>
				</ImageWrapper>
				<ImageWrapper>
					<StyledImage
						src="/images/venue/brisbane-modern-building.jpg"
						alt="Gala Setup"
						width={327}
						height={283}
					/>
				</ImageWrapper>
			</ImageContainer>
		</Container>
	);
};

export default VenueGallery;
