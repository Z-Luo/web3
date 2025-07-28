/* eslint-disable @typescript-eslint/ban-ts-comment */
import styled from 'styled-components';

import { color } from '@/styles/variables';

interface CardCategory {
	title: string;
	subtitle?: string;
	description: string[];
	backgroundColor: string;
	showBulletPoint: boolean;
	cardWidth?: string;
	cardHeight?: string;
}
// @ts-ignore
const StyledGridItem = styled.div`
	background-color: #131313;
	height: ${(props: { cardHeight?: string }) => props.cardHeight || '346px'};
	max-width: ${(props: { cardWidth?: string }) => props.cardWidth || '368px'};
	position: relative;
`;
const SubTitle = styled.p`
	background-color: ${(props: { backgroundColor: string }) => props.backgroundColor};
	color: ${color.blackcolor};
	font-size: 24px;
	font-weight: bold;
	margin: 0 0 24px;
	padding: 17px 24px;
	width: 100%;
`;
const CardTitle = styled.p`
	color: ${color.whiteColor};
	font-size: 20px;
	font-weight: bold;
	margin: 0 24px 16px;
`;
const DescriptionList = styled.ul`
	padding: 0 24px;
`;

const LiParagraph = styled.li`
	color: ${color.whiteColor};
	font-size: 16px;
	line-height: 1.5;
	margin: 0 0 16px 12px;
`;
const Paragraph = styled.p`
	color: ${color.whiteColor};
	font-size: 16px;
	line-height: 1.5;
	margin-bottom: 16px;
`;
const ColorfulCard: React.FC<CardCategory> = ({
	title,
	subtitle,
	description,
	backgroundColor,
	showBulletPoint,
	cardWidth,
	cardHeight
}) => {
	return (
		// @ts-ignore
		<StyledGridItem cardWidth={cardWidth} cardHeight={cardHeight}>
			<SubTitle backgroundColor={backgroundColor}>{title}</SubTitle>
			{subtitle && <CardTitle>{subtitle}</CardTitle>}
			<DescriptionList>
				{description.map(item => {
					const DescriptionItem = (
						showBulletPoint ? LiParagraph : Paragraph
					) as React.ElementType;
					return <DescriptionItem key={item}>{item}</DescriptionItem>;
				})}
			</DescriptionList>
		</StyledGridItem>
	);
};

export default ColorfulCard;
