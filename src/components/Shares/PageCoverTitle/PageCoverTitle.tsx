import styled from 'styled-components';

import {
	Subtitle,
	Title
} from '@/components/Pages/Home/HomeCarousel/components/CarouseItem/CarouseItem';
import { color, devices } from '@/styles/variables';

const { whiteColor, primaryColor } = color;

interface PageCoverTitleProps {
	coverText: {
		_id: string;
		title: string;
		subtitle?: string;
		additionalSubtitle?: string;
	};
	translateValue?: string;
	children?: React.ReactNode;
}

const Container = styled.div<PageCoverTitleProps>`
	align-items: center;
	color: ${whiteColor};
	display: flex;
	height: inherit;
	margin: 0 auto;
	max-width: 1440px;
	position: relative;
	width: calc(100vw - 40px);
	@media ${devices.laptop} {
		width: calc(100vw - 200px);
	}
`;

const CoverSubtitle = styled(Subtitle)`
	color: ${primaryColor};
	@media ${devices.miniMobile} {
		font-size: 16px;
	}
	@media ${devices.tablet} {
		font-size: 16px;
	}
	@media ${devices.largeLaptop} {
		font-size: 18px;
	}
`;

const CoverTitle = styled(Title)`
	font-size: 48px;
	letter-spacing: 0.78px;
	white-space: pre-wrap;

	@media ${devices.miniMobile} {
		font-size: 54px;
	}
	@media ${devices.tablet} {
		font-size: 60px;
	}
	@media ${devices.desktop} {
		font-size: 70px;
	}
`;

const PageCoverTitle: React.FC<PageCoverTitleProps> = props => {
	const { coverText, translateValue, children } = props;

	return (
		<Container translateValue={translateValue} coverText={coverText}>
			<div>
				{coverText.subtitle && (
					<CoverSubtitle isCurrent>{coverText.subtitle}</CoverSubtitle>
				)}
				{coverText.additionalSubtitle && (
					<CoverSubtitle isCurrent>{coverText.additionalSubtitle}</CoverSubtitle>
				)}
				<CoverTitle isCurrent>{coverText.title}</CoverTitle>
				{children}
			</div>
		</Container>
	);
};

export default PageCoverTitle;
