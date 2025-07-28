import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import postList from './postList.json';
import ThemeButton from '@/components/Shares/ThemeButton';
import { animationHoverImageParent, backdrop, sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { devices, sizes } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const HomePostsContainer = styled.div`
	max-width: ${`${sizes.largeLaptop}px`};
	padding: 100px 40px 60px;
	position: relative;
	@media ${devices.mobile} {
		padding: 100px 100px 120px;
	}
	@media ${devices.laptop} {
		margin: 0 auto;
	}
`;

const Title = styled.h2`
	${sectionTitle};
`;

const Backdrop = styled.div`
	${backdrop};
	left: 9vw;
	@media ${devices.mobile} {
		left: 5vw;
	}
`;

const Subtitle = styled.p`
	${sectionSubtitle};
`;

const ImageItem = styled(Link)`
	${animationHoverImageParent()};
	cursor: pointer;
	height: 50vw;
	position: relative;
	@media ${devices.tablet} {
		height: 24vw;
	}
	@media ${devices.laptop} {
		height: 18vw;
		max-height: 300px;
	}
`;

const StyledImage = styled(Image)`
	object-fit: cover;
`;

const PostTitle = styled.h3`
	font-size: 20px;
	font-weight: 700;
	margin-bottom: 10px;
	@media ${devices.laptop} {
		font-size: 26px;
	}
`;

const ViewMore = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	margin-top: 88px;
`;

const HomePosts: React.FC = () => {
	return (
		<HomePostsContainer>
			<Subtitle>AI + Web3 Convention 2024</Subtitle>
			<Title>Side Events</Title>
			<Backdrop>Side</Backdrop>
			<Grid container spacing={1}>
				{postList.map(post => {
					let postLink;
					switch (post._id) {
						case '1':
							postLink = '/startup';
							break;
						case '4':
							postLink = '/hackathon';
							break;
						case '5':
							postLink = 'https://www.youtube.com/watch?v=sdXh3m9bTso';
							break;
						default:
							postLink = '/comingSoon';
							break;
					}
					return (
						<Grid
							item
							mobile={12}
							tablet={12}
							laptop={6}
							largeLaptop={3}
							key={post._id}
							className="relative"
						>
							<ImageItem href={postLink}>
								<StyledImage
									loader={imageLoader}
									src={post.imageSrc}
									alt={post.title}
									fill
									unoptimized
								/>
							</ImageItem>
							<Link href={postLink}>
								<PostTitle>{post.title}</PostTitle>
							</Link>
						</Grid>
					);
				})}
			</Grid>
			{/* 隐藏按钮 */}
			<ViewMore>
				<ThemeButton href="https://web3convention.com/side-events">VIEW MORE</ThemeButton>
			</ViewMore>
		</HomePostsContainer>
	);
};

export default HomePosts;
