import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import imageList from './imageList.json';
import { animationHoverImage, animationHoverImageParent, tagDecoration } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { primaryColor, whiteColor } = color;

const ImageListContainer = styled(Grid)``;

const ImageItem = styled(Link)`
	${animationHoverImageParent()};
	cursor: pointer;
	height: 280px;
	position: relative;
	@media ${devices.mobile} {
		height: 320px;
	}
	@media ${devices.tablet} {
		height: 420px;
	}
`;

const StyledImage = styled(Image)`
	${animationHoverImage()};
	object-fit: cover;
`;

const Subtitle = styled.p`
	color: ${primaryColor};
	font-size: 12px;
	font-style: italic;
	letter-spacing: 0.1rem;
	${tagDecoration()};
	margin: 0;
`;

const Label = styled.div`
	bottom: 0;
	color: ${whiteColor};
	font-size: 24px;
	font-weight: 700;
	padding-left: 15px;
	position: absolute;
	text-shadow: 0 0 10px #000000;
	@media ${devices.laptop} {
		font-size: 28px;
	}
`;
const Title = styled.div`
	margin: 5px 0 20px;
`;

const HomeImageList: React.FC = () => {
	return (
		<ImageListContainer container justifyContent="space-between" spacing={2}>
			{imageList.map((item, idx) => {
				const laptopWidth = [3, 3, 3, 3];
				return (
					<Grid
						item
						mobile={6}
						tablet={6}
						laptop={laptopWidth[idx % 4]}
						largeLaptop={laptopWidth[idx % 4]}
						key={item._id}
					>
						<ImageItem href={item.href}>
							<StyledImage
								loader={imageLoader}
								src={item.imageSrc}
								alt={item.label}
								fill
								unoptimized
								loading="lazy"
							/>
							<Label>
								<Subtitle>{item.subtitle}</Subtitle>
								<Title>{item.label}</Title>
							</Label>
						</ImageItem>
					</Grid>
				);
			})}
		</ImageListContainer>
	);
};

export default HomeImageList;
