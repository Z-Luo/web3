import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import React from 'react';
import styled from 'styled-components';

import { color, devices } from '@/styles/variables';

const { descriptionColor } = color;

interface IntroCardProps {
	imageSrc: string;
	title: string;
	description: string;
}

const CardContainer = styled(Card)`
	aspect-ratio: 1;
	padding: 10px 10px 0 10px;
	width: 100%;
	@media ${devices.tablet} {
		aspect-ratio: 3/5;
		width: 28vw;
	}
	@media ${devices.laptop} {
		height: 26vw;
		width: 26vw;
	}
	@media ${devices.largeLaptop} {
		max-width: 379px;
		max-height: 390px;
	}
`;

const CoverContainer = styled(CardMedia)`
	height: 66%;

	@media ${devices.largeLaptop} {
		height: 73%;
	}
`;
const ContentContainer = styled.div`
	display: grid;
	margin: 0 2%;
	position: relative;
	top: 17%;
	transform: translate(0, -50%);
	@media ${devices.miniMobile} {
		top: 17%;
		margin: 0 2%;
	}
	@media ${devices.mobile} {
		margin: 0 2.5%;
	}
	@media ${devices.largeLaptop} {
		top: 13.5%;
		margin: 0 2px;
	}
`;

const Title = styled.h3`
	font-size: 18px;
	font-weight: 700;
	margin-bottom: 1.4vw;
	@media ${devices.miniMobile} {
		font-size: 22px;
		margin-bottom: 1.4vw;
	}
	@media ${devices.mobile} {
		font-size: 25px;
		margin-bottom: 12px;
	}
	@media ${devices.tablet} {
		font-size: 18px;
		margin-bottom: 5px;
	}
	@media ${devices.laptop} {
		font-size: 20px;
		margin-bottom: 5px;
	}
	@media ${devices.largeLaptop} {
		font-size: 24px;
		margin-bottom: 8px;
	}
`;

const Description = styled.p`
	color: ${descriptionColor};
	font-size: 12px;
	line-height: 1.29;
	@media ${devices.miniMobile} {
		font-size: 14px;
	}
	@media ${devices.mobile} {
		font-size: 15px;
	}
	@media ${devices.tablet} {
		font-size: 11px;
	}
	@media ${devices.laptop} {
		font-size: 11px;
	}
	@media ${devices.largeLaptop} {
		font-size: 14px;
	}
`;

const VenueIntroCard: React.FC<IntroCardProps> = props => {
	const { imageSrc, title, description } = props;
	return (
		<CardContainer variant="outlined">
			<CoverContainer image={imageSrc} />
			<ContentContainer>
				<Title>{title}</Title>
				<Description>{description}</Description>
			</ContentContainer>
		</CardContainer>
	);
};

export default VenueIntroCard;
