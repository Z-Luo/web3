import Grid from '@mui/material/Grid';
import styled from 'styled-components';

import highlightMomentsList from './highlightMomentsList.json';
import { backdrop, sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { devices, sizes } from '@/styles/variables';

const ContentContainer = styled.div`
	margin: auto;
	max-width: ${`${sizes.largeLaptop}px`};
	padding: 50px 30px 50px;
	position: relative;
	@media ${devices.mobile} {
		padding: 50px 100px 50px;
	}
`;
const Container = styled.div`
	margin: 0 auto;
	max-width: 1440px;
	padding: 0 30px 0 50px;
`;

const Backdrop = styled.div`
	${backdrop}
	margin: -7vh 0 0 12vw;
	@media (max-width: 768px) {
		margin: 0;
	}
`;

const Title = styled.h2`
	${sectionTitle};
	max-width: unset;
`;
const Subtitle = styled.p`
	${sectionSubtitle};
`;

const ImageListContainer = styled(Grid)`
	text-align: center;
`;

const HighlightImage = styled.img`
	display: block;
	height: 400px;
	margin: auto;
	object-fit: cover;
	width: 304px;
	@media ${devices.mobile} {
		width: 100%;
	}
`;

const HighlightMoments: React.FC = () => {
	return (
		<ContentContainer>
			<Container>
				<Subtitle>Web3 Hackathon 2023</Subtitle>
				<Title>Highlight Moments</Title>
				<Backdrop>Highlights</Backdrop>
				<ImageListContainer container spacing={1}>
					{highlightMomentsList.map(item => {
						return (
							<Grid
								item
								mobile={12}
								tablet={6}
								laptop={3}
								largeLaptop={3}
								key={item._id}
							>
								<HighlightImage src={item.imageSrc} alt={item.label} />
							</Grid>
						);
					})}
				</ImageListContainer>
			</Container>
		</ContentContainer>
	);
};

export default HighlightMoments;
