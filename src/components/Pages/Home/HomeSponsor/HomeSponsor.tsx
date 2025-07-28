import { Typography } from '@mui/material';
import styled from 'styled-components';

import sponsorList from './sponsorList.json';
import { backdrop, sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { devices, sizes } from '@/styles/variables';

const HomeSponsorContainer = styled.div`
	max-width: ${`${sizes.largeLaptop}px`};
	padding: 100px 40px 140px;
	position: relative;
	@media ${devices.mobile} {
		padding: 100px 100px 140px;
	}
	@media ${devices.tablet} {
		padding: 100px 50px 140px;
	}
	@media ${devices.laptop} {
		margin: 0 auto;
	}
`;

const Container = styled.div`
	margin: 0 auto;
	max-width: 1440px;
	@media ${devices.tablet} {
		padding-left: 4vw;
	}
	@media ${devices.laptop} {
		padding-left: 1.4vw;
	}
	@media ${devices.largeLaptop} {
		padding-left: 2vw;
	}
`;

const Title = styled.h2`
	${sectionTitle};
	font-size: 40px;
	font-weight: bold;
	margin-bottom: 10vw;
	white-space: normal;
	width: 20vw;
	@media ${devices.mobile} {
		width: 100%;
		margin-bottom: 7vw;
	}
`;

const Subtitle = styled.p`
	${sectionSubtitle};
`;

const StyledTypography = styled(Typography)`
	font-size: 16px;
	font-weight: bold;
	line-height: 1.5;
	@media ${devices.mobile} {
		line-height: 1.33;
		font-size: 18px;
	}
`;

const ImageContainer = styled.a`
	align-items: center;
	cursor: pointer;
	display: flex;
	height: 80%;
	justify-content: center;
	max-width: 80%;
	position: relative;
	img:last-child {
		-moz-transition: opacity 0.1s ease-in-out 0.1s;
		-webkit-transition: opacity 0.1s ease-in-out 0.1s;
		opacity: 0;
		position: absolute;
		top: 0;
		transition: opacity 0.1s ease-in-out 0.1s;
	}
	&:hover img:last-child {
		opacity: 1;
	}
`;

const Backdrop = styled.div`
	${backdrop};
	left: 9vw;
	@media ${devices.mobile} {
		left: 5vw;
	}
`;

const StyledImage = styled.img`
	display: block;
	height: 70px;
	max-height: 100%;
	max-width: 100%;
	object-fit: contain;
	width: auto;
	@media ${devices.mobile} {
		height: 50px;
	}
	@media ${devices.tablet} {
		height: 80px;
	}
`;

const Rectangle = styled.div`
	align-items: center;
	background-color: #fff;
	border: solid 1px #efefef;
	display: flex;
	height: 70px;
	justify-content: center;
	overflow: hidden;
	width: 100%;
	@media ${devices.mobile} {
		height: 50px;
	}
	@media ${devices.tablet} {
		height: 80px;
	}
`;

const SponsorContainer = styled.div`
	display: grid;
	gap: 24px;
	grid-template-columns: repeat(2, 1fr);
	height: 100%;
	margin: 16px auto;
	@media ${devices.tablet} {
		grid-template-columns: repeat(6, 1fr);
	}
	@media ${devices.mobile} {
		margin: 24px auto;
	}
`;

const SponsorGroup = styled.div`
	margin-bottom: 12vw;
	@media ${devices.mobile} {
		margin-bottom: 4vw;
	}
`;

const HomeSponsor: React.FC = () => {
	return (
		<HomeSponsorContainer>
			<Container>
				<Subtitle>AI + Web3 Convention 2024</Subtitle>
				<Title>2024 Partners</Title>
				<Backdrop>Partners</Backdrop>
				<SponsorGroup>
					{sponsorList.map((sponsorGroup, index) => (
						<SponsorGroup key={sponsorGroup.groupId}>
							<StyledTypography>{sponsorGroup.groupName}</StyledTypography>
							<SponsorContainer className={`group-${index}`}>
								{sponsorGroup.sponsor.map(sponsor => (
									<Rectangle key={sponsor._id} className={`group-${index}`}>
										<ImageContainer href={sponsor.url}>
											<StyledImage
												src={sponsor.logoSrc}
												alt={`sponsor_${sponsor._id}`}
												className={`group-${index}`}
											/>
											<StyledImage
												src={sponsor.logoSrcHighlight || sponsor.logoSrc}
												alt={`sponsor_${sponsor._id}_highLight`}
												className={`group-${index}`}
											/>
										</ImageContainer>
									</Rectangle>
								))}
							</SponsorContainer>
						</SponsorGroup>
					))}
				</SponsorGroup>
			</Container>
		</HomeSponsorContainer>
	);
};

export default HomeSponsor;
