/* eslint-disable @next/next/no-img-element */
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import teamMemberList from './teamMemberList.json';
import {
	animation,
	animationFillMode,
	animationHoverImage,
	animationHoverImageParent,
	backdrop,
	sectionSubtitle,
	sectionTitle,
	tagDecoration,
	textEllipsis
} from '@/styles/mixin';
import { color, devices, sizes } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { blackColor, darkPrimaryColor, primaryColor, whiteColor } = color;

enum ESocialMedia {
	LINKED_IN = 'linkedIn',
	TWITTER = 'twitter',
	FACEBOOK = 'facebook'
}

const HomeTeamContainer = styled(Grid)`
	background-color: ${blackColor};
`;

const GridItemContainer = styled.div`
	${animationHoverImageParent('8px')};
	&:hover {
		.home-team-info-container::after {
			opacity: 0.7;
		}
		.home-team-info-container__description {
			opacity: 1;
		}
		.home-team-info-container__social-media {
			a:first-child {
				${animation('fade-in-opacity-transform-to-right', '0.2s', 'linear', '0.1s', '1')};
				${animationFillMode()};
			}
			a:nth-child(2) {
				${animation('fade-in-opacity-transform-to-right', '0.2s', 'linear', '0.2s', '1')};
				${animationFillMode()};
			}
			a:nth-child(3) {
				${animation('fade-in-opacity-transform-to-right', '0.2s', 'linear', '0.3s', '1')};
				${animationFillMode()};
			}
			a:nth-child(4) {
				${animation('fade-in-opacity-transform-to-right', '0.2s', 'linear', '0.4s', '1')};
				${animationFillMode()};
			}
		}
	}
`;

const ImageContainer = styled.div`
	cursor: pointer;
	height: 100vw;
	position: relative;
	@media ${devices.mobile} {
		height: 50vw;
	}
	@media ${devices.tablet} {
		height: 36vw;
	}
	@media ${devices.laptop} {
		height: 340px;
	}
`;

const StyledImage = styled(Image)`
	${animationHoverImage('-8px')};
	object-fit: cover;
`;

const InfoContainer = styled.div`
	color: ${whiteColor};
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
`;

const Info = styled.div`
	height: 100%;
	padding: 20px 24px;
	position: relative;
	width: 100%;
	z-index: 0;
	&:after {
		-moz-transition: opacity 0.4s cubic-bezier(0.19, 0.5, 0.46, 0.88);
		-webkit-transition: opacity 0.4s cubic-bezier(0.19, 0.5, 0.46, 0.88);
		background: #53f6c6;
		background: -moz-linear-gradient(225deg, #53f6c6 0, #53f6c6 0, #6e38db 100%);
		background: -webkit-gradient(
			linear,
			right top,
			left bottom,
			color-stop(0, #53f6c6),
			color-stop(0, #53f6c6),
			color-stop(100%, #6e38db)
		);
		background: -webkit-linear-gradient(225deg, #53f6c6 0, #53f6c6 0, #6e38db 100%);
		background: linear-gradient(225deg, #53f6c6 0, #53f6c6 0, #6e38db 100%);
		content: '';
		display: block;
		height: 100%;
		left: 0;
		opacity: 0;
		position: absolute;
		top: 0;
		transition: opacity 0.4s cubic-bezier(0.19, 0.5, 0.46, 0.88);
		width: 100%;
		z-index: -1;
	}
`;

const Subtitle = styled.p`
	color: ${darkPrimaryColor};
	font-size: 14px;
	font-style: italic;
	letter-spacing: 0.05rem;
	${tagDecoration()};
	margin: 0;
	${animation('fade-in-opacity-transform-to-up', '1s', 'ease', '0.4s', '1')};
	${animationFillMode()};
	opacity: 0;
`;

const Title = styled.h3`
	font-size: 26px;
	font-weight: 700;
	line-height: 1.2;
	margin: 0;
	@media ${devices.tablet} {
		font-size: 32px;
	}
`;

const PostDescription = styled.p`
	-moz-transition: opacity 0.5s;
	-webkit-transition: opacity 0.5s;
	opacity: 0;
	transition: opacity 0.5s;
	${textEllipsis(4)};
`;

const SocialMediaContainer = styled.div`
	margin-top: auto;
	a {
		color: ${primaryColor};
		margin-right: 12px;
		opacity: 0;
		&:hover {
			color: ${whiteColor};
		}
	}
`;

const SectionSubtitle = styled.p`
	${sectionSubtitle};
`;

const SectionTitle = styled.h2`
	${sectionTitle};
`;

const ExpectedSpeakerContainer = styled.div`
	max-width: ${`${sizes.largeLaptop}px`};
	padding: 100px 40px 140px;
	position: relative;
	@media ${devices.mobile} {
		padding: 100px 100px 140px;
	}
	@media ${devices.laptop} {
		margin: 0 auto;
	}
`;

const Backdrop = styled.div`
	${backdrop}
`;

const LogoWrapper = styled.div`
	-moz-box-shadow: 9px 9px 49px 4px rgba(0, 0, 0, 0.29);
	-webkit-box-shadow: 9px 9px 49px 4px rgba(0, 0, 0, 0.29);
	background-color: white;
	border-radius: 15px;
	box-shadow: 9px 9px 49px 4px rgba(0, 0, 0, 0.29);
	height: 30px;
	padding: 7px 15px;
	position: absolute;
	right: 5px;
	top: 5px;
	img.logo {
		height: 100%;
		transform: none;
	}
`;

const HomeTeam: React.FC = () => {
	return (
		<ExpectedSpeakerContainer>
			<SectionSubtitle>guest_speakers</SectionSubtitle>
			<SectionTitle>Expected Speakers</SectionTitle>
			<Backdrop>speakers</Backdrop>
			<HomeTeamContainer container>
				{teamMemberList.map(teamMember => {
					const postLink = '/comingSoon';
					return (
						<Grid
							item
							mobile={12}
							tablet={6}
							laptop={4}
							largeLaptop={2.4}
							key={teamMember._id}
							className="relative"
						>
							<GridItemContainer>
								<ImageContainer>
									<StyledImage
										loader={imageLoader}
										src={teamMember.avatarSrc}
										alt={teamMember.name}
										fill
										unoptimized
										loading="lazy"
									/>
								</ImageContainer>
								<InfoContainer>
									<Info className="home-team-info-container flex flex-col">
										{teamMember.companySrc && (
											<LogoWrapper>
												<img
													className="logo"
													src={teamMember.companySrc}
													alt={teamMember.name}
												/>
											</LogoWrapper>
										)}
										<PostDescription className="home-team-info-container__description">
											{teamMember.description}
										</PostDescription>
										<SocialMediaContainer className="home-team-info-container__social-media">
											{Object.entries(teamMember.socialMedia).map(
												([socialMedia, link]) => {
													if (!link) return null;
													let socialMediaIcon = null;
													switch (socialMedia) {
														case ESocialMedia.LINKED_IN: {
															socialMediaIcon = <LinkedInIcon />;
															break;
														}
														case ESocialMedia.FACEBOOK: {
															socialMediaIcon = <FacebookIcon />;
															break;
														}
														case ESocialMedia.TWITTER: {
															socialMediaIcon = <TwitterIcon />;
															break;
														}
														default: {
															break;
														}
													}
													return (
														<Link
															href={link}
															target="_blank"
															rel="noopener noreferrer"
															key={`${teamMember._id}-${socialMedia}`}
														>
															{socialMediaIcon}
														</Link>
													);
												}
											)}
										</SocialMediaContainer>
										<Subtitle>{teamMember.jobTitle}</Subtitle>
										<Link href={postLink}>
											<Title>{teamMember.name}</Title>
										</Link>
									</Info>
								</InfoContainer>
							</GridItemContainer>
						</Grid>
					);
				})}
			</HomeTeamContainer>
		</ExpectedSpeakerContainer>
	);
};

export default HomeTeam;
