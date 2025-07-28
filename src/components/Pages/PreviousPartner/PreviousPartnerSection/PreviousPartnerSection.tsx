import { Typography } from '@mui/material';
import styled from 'styled-components';

import sponsorList from '@/components/Pages/Home/HomeSponsor/sponsorList.json';
import { color, devices } from '@/styles/variables';

const { blackColor, whiteColor } = color;

const SponsorSectionContainer = styled.div`
	background-color: ${blackColor};
	padding: 90px 40px 140px;
	position: relative;
	@media ${devices.mobile} {
		padding: 90px 100px 140px;
	}
	@media ${devices.tablet} {
		padding: 90px 50px 140px;
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

const StyledTypography = styled(Typography)`
	color: ${whiteColor};
	font-size: 16px;
	font-weight: bold;
	line-height: 1.5;
	@media ${devices.mobile} {
		line-height: 1.33;
		font-size: 18px;
		text-align: center;
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

const PreviousPartnerSection: React.FC = () => {
	return (
		<SponsorSectionContainer>
			<Container>
				<SponsorGroup>
					{sponsorList.map(sponsorGroup => (
						<SponsorGroup key={sponsorGroup.groupId}>
							<StyledTypography>{sponsorGroup.groupName}</StyledTypography>
							<SponsorContainer>
								{sponsorGroup.sponsor.map(sponsor => (
									<Rectangle key={sponsor._id}>
										<ImageContainer href={sponsor.url}>
											<StyledImage
												src={sponsor.logoSrc}
												alt={`sponsor_${sponsor._id}`}
											/>
											<StyledImage
												src={sponsor.logoSrcHighlight || sponsor.logoSrc}
												alt={`sponsor_${sponsor._id}_highLight`}
											/>
										</ImageContainer>
									</Rectangle>
								))}
							</SponsorContainer>
						</SponsorGroup>
					))}
				</SponsorGroup>
			</Container>
		</SponsorSectionContainer>
	);
};

export default PreviousPartnerSection;
