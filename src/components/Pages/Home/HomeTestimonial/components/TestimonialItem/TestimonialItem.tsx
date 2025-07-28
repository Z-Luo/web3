import Image from 'next/image';
import styled from 'styled-components';

import DotDecoration from '@/assets/images/dot-decoration-background.svg';
import { tagDecoration } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { primaryColor, textColor, darkPrimaryColor } = color;

interface ITestimonial {
	_id: string;
	author: {
		name: string;
		avatarSrc: string;
		jobTitle: string;
	};
	comment: string;
}

interface TestimonialItemProps {
	testimonial: ITestimonial;
}

const TestimonialItemContainer = styled.div`
	color: ${textColor};
	cursor: pointer;
	flex-direction: column;
	max-width: 440px;
	min-height: 500px;
	padding: 0 30px;
	@media ${devices.tablet} {
		flex-direction: row;
		padding: 0;
	}
`;

const Title = styled.h2`
	font-size: 18px;
	font-weight: 700;
	margin: 0;
	margin-bottom: 8px;
`;

const Subtitle = styled.p`
	color: ${darkPrimaryColor};
	font-size: 14px;
	font-style: italic;
	margin: 0;
	${tagDecoration()};
`;

const ImageContainer = styled.div`
	width: 100px;
	z-index: 2;
`;

const LeftSection = styled.div`
	margin-right: 40px;
	position: relative;
	width: 176px;
`;

const RightSection = styled.div`
	flex: 1;
	margin-bottom: auto;
	text-align: left;
`;

const StyledDotDecoration = styled(DotDecoration)`
	position: absolute;
	right: 0;
	top: 0;
`;

const HighLightSection = styled.p`
	background-color: ${primaryColor};
	font-size: 54px;
	font-weight: 700;
	height: 76px;
	line-height: 100px;
	margin: 0;
	margin-left: auto;
	text-align: center;
	vertical-align: middle;
	width: 76px;
	z-index: 2;
`;

const Comment = styled.p`
	font-size: 14px;
	line-height: 2;
`;

const TestimonialItem: React.FC<TestimonialItemProps> = ({ testimonial: { author, comment } }) => {
	return (
		<TestimonialItemContainer className="flex">
			<LeftSection className="flex flex-col">
				<HighLightSection>“</HighLightSection>
				<ImageContainer>
					<Image
						loader={imageLoader}
						unoptimized
						src={author.avatarSrc}
						alt={author.name}
						width={100}
						height={100}
						loading="lazy"
					/>
				</ImageContainer>
				<StyledDotDecoration />
			</LeftSection>
			<RightSection>
				<Comment>{`"${comment}"`}</Comment>
				<Title>{author.name}</Title>
				<Subtitle>{author.jobTitle}</Subtitle>
			</RightSection>
		</TestimonialItemContainer>
	);
};

export default TestimonialItem;
