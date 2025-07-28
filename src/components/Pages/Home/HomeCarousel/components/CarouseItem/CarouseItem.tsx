import styled from 'styled-components';

import ThemeButton from '@/components/Shares/ThemeButton';
import { animation, animationFillMode, tagDecoration } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';

const { blackColor, whiteColor } = color;

interface ICarouseItem {
	_id: string;
	title: string;
	subtitle: string;
	description: string;
	imageSrc: string;
}

interface CarouseItemProps {
	carouselInfo: ICarouseItem;
	isCurrent: boolean;
}

interface CarouseItemContainerProps {
	imageSrc: string;
}

interface TextProps {
	isCurrent: boolean;
}

const CarouseItemContainer = styled.div<CarouseItemContainerProps>`
	background-image: url(${({ imageSrc }) => imageSrc});
	background-position: 50% 50%;
	background-size: cover;
	color: ${whiteColor};
	min-height: 70vh;
`;

const InfoContainer = styled.div`
	margin-bottom: 50px;
	margin-left: 30px;
	margin-top: 80px;
	text-align: left;
	@media ${devices.tablet} {
		width: 585px;
		margin-left: 60px;
	}
	@media ${devices.laptop} {
		width: 597px;
		margin-left: 120px;
	}
	@media ${devices.desktop} {
		margin-left: 240px;
	}
`;

export const Title = styled.h2<TextProps>`
	font-size: 54px;
	font-weight: 700;
	letter-spacing: 1px;
	line-height: 1.1;
	margin: 0;
	margin-bottom: 16px;
	text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
	${({ isCurrent }) =>
		isCurrent
			? animation('fade-in-opacity-transform-to-left', '1s', 'ease', '0.7s', '1')
			: null};
	${({ isCurrent }) => (isCurrent ? animationFillMode() : null)};
`;

export const Subtitle = styled.p<TextProps>`
	color: #52f6c6;
	font-size: 18px;
	font-style: italic;
	letter-spacing: 1px;
	margin: 0;
	margin-bottom: 8px;
	opacity: 0;
	text-shadow: 0 0 10px ${blackColor};
	${tagDecoration};
	${({ isCurrent }) =>
		isCurrent
			? animation('fade-in-opacity-transform-to-left', '1s', 'ease', '0.5s', '1')
			: null};
	${({ isCurrent }) => (isCurrent ? animationFillMode() : null)};

	@media ${devices.tablet} {
		font-size: 16px;
		letter-spacing: 0.89px;
		margin-bottom: 0;
	}
`;

export const Description = styled.p<TextProps>`
	font-size: 16px;
	line-height: 24px;
	margin: 0;
	margin-bottom: 20px;
	opacity: 0;
	padding-right: 20px;
	${({ isCurrent }) =>
		isCurrent
			? animation('fade-in-opacity-transform-to-left', '1s', 'ease', '0.9s', '1')
			: null};
	${({ isCurrent }) => (isCurrent ? animationFillMode() : null)};
	@media ${devices.tablet} {
		line-height: 1.5;
	}
	@media ${devices.mobile} {
		font-size: 18px;
		line-height: 1.8;
		margin-bottom: 40px;
	}
	@media ${devices.laptop} {
		padding-right: 0;
	}
`;
const HighlightContainer = styled.div``;
const HighlightItem = styled.div`
	align-items: center;
	flex-direction: column;
	margin-bottom: 24px;
	:last-of-type {
		margin-bottom: 56px;
	}
	@media ${devices.tablet} {
		display: flex;
		flex-direction: row;
		margin-bottom: 8px;
	}
`;
const HighlightItemTitle = styled.p`
	background-color: ${color.primaryColor};
	box-sizing: content-box;
	color: ${color.blackColor};
	font-size: 16px;
	font-weight: bold;
	margin: 0 8px 0 0;
	padding: 6px 0;
	text-align: center;
	width: 80px;
`;
const HighlightItemDescription = styled.p`
	color: ${color.whiteColor};
	font-size: 16px;
	margin-top: 8px;
	@media ${devices.tablet} {
		margin: 0 0;
	}
`;

const MultipleButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media ${devices.tablet} {
		flex-direction: row;
		justify-content: flex-start;
	}
`;

const ButtonContainer = styled.div<TextProps>`
	border-radius: 30px;
	opacity: 0;
	padding: 0 50px 10px 0;
	${({ isCurrent }) =>
		isCurrent
			? animation('fade-in-opacity-transform-to-left', '1s', 'ease', '1.1s', '1')
			: null};
	${({ isCurrent }) => (isCurrent ? animationFillMode() : null)};
`;

const CarouseItem: React.FC<CarouseItemProps> = ({
	carouselInfo: { title, subtitle, description, imageSrc },
	isCurrent
}) => {
	return (
		<CarouseItemContainer imageSrc={imageSrc} className="flex flex-col justify-center">
			<InfoContainer>
				<Subtitle isCurrent={isCurrent}>{subtitle}</Subtitle>
				<Title isCurrent={isCurrent}>{title}</Title>
				<Description isCurrent={isCurrent}>{description}</Description>
				<HighlightContainer>
					<HighlightItem>
						<HighlightItemTitle>DATE</HighlightItemTitle>
						<HighlightItemDescription>18-19 May, 2024</HighlightItemDescription>
					</HighlightItem>
					<HighlightItem>
						<HighlightItemTitle>VENUE</HighlightItemTitle>
						<HighlightItemDescription>
							Exhibition Hall 4, Brisbane Convention & Exhibition Centre, Australia
						</HighlightItemDescription>
					</HighlightItem>
				</HighlightContainer>
				<MultipleButtonsContainer>
					<ButtonContainer isCurrent={isCurrent}>
						<ThemeButton width="215px" href="/get-tickets">
							BOOK TICKETS
						</ThemeButton>
					</ButtonContainer>
					<ButtonContainer isCurrent={isCurrent}>
						<ThemeButton width="215px" href="/startup">
							Startup Competition
						</ThemeButton>
					</ButtonContainer>
				</MultipleButtonsContainer>
			</InfoContainer>
		</CarouseItemContainer>
	);
};

export default CarouseItem;
