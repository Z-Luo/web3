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
}

const Container = styled.div<PageCoverTitleProps>`
	color: ${whiteColor};
	margin: 0 auto;
	max-width: 1440px;
	position: relative;
	top: 105px;
	transform: ${props => props.translateValue || 'translate(0, -95%)'};
	width: calc(100vw - 40px);
	@media ${devices.mobile} {
		top: 28%;
	}

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
	@media ${devices.largeLaptop} {
		font-size: 70px;
	}
`;

const SideEventCoverTitle: React.FC<PageCoverTitleProps> = props => {
	const { coverText, translateValue } = props;

	return (
		<Container translateValue={translateValue} coverText={coverText}>
			{coverText.subtitle && <CoverSubtitle isCurrent>{coverText.subtitle}</CoverSubtitle>}
			{coverText.additionalSubtitle && (
				<CoverSubtitle isCurrent>{coverText.additionalSubtitle}</CoverSubtitle>
			)}
			<CoverTitle isCurrent>{coverText.title}</CoverTitle>
		</Container>
	);
};

export default SideEventCoverTitle;
