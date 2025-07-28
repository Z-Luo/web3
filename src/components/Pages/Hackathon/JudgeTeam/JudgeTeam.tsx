/* eslint-disable @next/next/no-img-element */
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';
import backgroundGreen from 'public/images/background/not-speaker-background.png';
import backgroundBlue from 'public/images/background/speaker-background.png';
import { useState } from 'react';
import styled from 'styled-components';

import MemberModal from '@/components/Shares/MemberModal';
import { backdrop, sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { blackColor, whiteColor, primaryColor } = color;

const speakerIcon = '/images/icons/speaker-icon.svg';
const speakerArrow = '/images/icons/speaker-arrow.svg';
const linkedinIcon = '/images/icons/linkedin.svg';
const facebookIcon = '/images/icons/Facebook_f_logo.svg';
const twitterIcon = '/images/icons/twitter.svg';

enum ESocialMedia {
	LINKED_IN = 'linkedIn',
	TWITTER = 'twitter',
	FACEBOOK = 'facebook'
}

interface TeamMemberProps {
	_id: string;
	name: string;
	description?: string;
	jobTitle?: string;
	avatarSrc: string;
	companySrc?: string;
	secondCompanySrc?: string;
	isSpeaker?: boolean;
	showBookLink?: string;
	bookTitle?: string;
	socialMedia?: {
		linkedIn?: string;
		twitter?: string;
	};
}

const HomeTeamContainer = styled(Grid)`
	background-color: black;
`;

const SpeakerArrowIconWrapper = styled.div`
	display: none;
	height: 20px;
	position: absolute;
	right: 0;
	> div {
		height: 100%;
		width: auto;
	}
`;

const GridItemContainer = styled.div<{ isSpeaker: boolean }>`
	background-image: ${props =>
		props.isSpeaker ? `url(${backgroundBlue.src})` : `url(${backgroundGreen.src})`};
	border: solid 0.5px #383333;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	height: 300px;
	position: relative;
	width: 235px;
	@media ${devices.miniMobile} {
		width: 100%;
		background-size: cover;
		background-position: center;
		padding: 0 10px;
	}
	@media ${devices.tablet} {
		padding: 0 18px;
	}
	@media ${devices.laptop} {
		transition: transform 0.3s ease-in-out;
		&:hover {
			transform: translateY(-8px);
			${SpeakerArrowIconWrapper} {
				display: block;
			}
		}
	}
`;

const ModalAvatarContainer = styled.div`
	background-color: black;
	border-radius: 50%;
	height: 136px;
	overflow: hidden;
	position: relative;
	width: 136px;
`;

const LogoGroup = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	position: relative;
`;

const Logo = styled.img`
	height: auto;
	max-height: 30px;
	object-fit: contain;
	position: relative;
	width: 100%;
`;

const LogoContainer = styled.div`
	align-items: center;
	background-color: ${whiteColor};
	border-radius: 25px;
	display: flex;
	height: 32px;
	justify-content: center;
	overflow: hidden;
	padding: 5px 15px;
	position: relative;
	width: 108px;
`;
const SecondLogoContainer = styled(LogoContainer)`
	position: absolute;
	top: 40px;
`;

const InfoMainContainer = styled.div`
	align-items: baseline;
	display: flex;
	flex-direction: column;
	margin-top: 24px;
	@media ${devices.mobile} {
		gap: 12px;
		flex-direction: row;
	}
`;

const MemberName = styled.div`
	color: #fff;
	font-size: 32px;
	font-weight: bold;
	height: 38px;
	@media ${devices.mobile} {
		font-size: 34px;
	}
`;

const MemberSocialMedia = styled.div`
	display: flex;
	gap: 10px;
	height: 20px;
	object-fit: contain;
	width: 20px;
	a {
		color: ${primaryColor};

		&:hover {
			color: ${whiteColor};
		}
	}
`;

const ModalIcons = styled.div`
	display: flex;
	gap: 12px;
	margin-top: 15px;
	@media ${devices.mobile} {
		margin-top: unset;
	}
`;

const InfoHeader = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ModalSubtitle = styled.span`
	color: #aaa;
	font-size: 18px;
	height: 70px;
	width: 250px;
	@media ${devices.mobile} {
		font-size: 20px;
		height: 50px;
	}
`;

const ModalPostDescription = styled.p`
	color: #e8e8e8;
	font-size: 14px;
	line-height: 1.5;
	margin-top: 24px;
	max-height: 20vh;
	overflow-y: scroll;
	text-wrap: wrap;
	white-space: pre-wrap;
	@media ${devices.mobile} {
		margin-top: 40px;
		max-height: unset;
		overflow: unset;
		font-size: 16px;
	}
`;

const SectionSubtitle = styled.p`
	${sectionSubtitle};
	margin-top: 50px;
`;

const SectionTitle = styled.h2`
	${sectionTitle};
	color: ${whiteColor};
	margin-bottom: 32px;
	span {
		display: block;
	}
	@media ${devices.tablet} {
		span {
			display: inline;
		}
		span:last-child {
			display: inline-block;
			white-space: nowrap;
		}

		margin-bottom: 97px;
	}
`;

const ExpectedSpeakerContainer = styled.div`
	background-color: ${blackColor};
	padding: 50px 15px;
	position: relative;
	@media ${devices.laptop} {
		margin: 0 auto;
	}
`;
const Container = styled.div`
	margin: 0 auto;
	max-width: 1440px;
	padding: 0;
	@media ${devices.laptop} {
		padding: 0 20px;
	}
`;

const LogoWrapper = styled.div`
	align-items: center;
	background-color: white;
	border-radius: 25px;
	display: flex;
	height: 33px;
	justify-content: center;
	margin-top: 8px;
	overflow: hidden;
	padding: 5px 15px;
	position: relative;
	top: 0px;
	width: 110px;
	@media ${devices.miniMobile} {
		right: 0;
	}
	@media ${devices.tablet} {
		right: -10px;
	}
`;

const LogoSection = styled.div`
	align-items: flex-end;
	display: flex;
	flex-direction: column;
	height: 50px;
	justify-content: end;
	position: relative;
	width: 100%;
`;

const InfoSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	padding-top: 10px;
`;
const AvatarContainer = styled.div`
	background-color: black;
	border-radius: 50%;
	height: 103px;
	overflow: hidden;
	position: relative;
	width: 103px;
`;
const AvatarImage = styled(Image)`
	display: block;
	height: auto;
	object-fit: cover;
	object-position: top;
	position: absolute;
	width: 100%;
`;
const NameAndTitle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
const NameContainer = styled.div`
	color: ${whiteColor};
	font-family: Arial-BoldMT;
	font-size: 24px;
	padding: 16px 0 8px;
`;
const JobTitleContainer = styled.div`
	color: #aaaaaa;
	font-family: ArialMT;
	font-size: 14px;
	margin-right: 10px;
`;
const Backdrop = styled.div`
	${backdrop};
	color: ${whiteColor};
	&::after {
		background-image: none;
	}
	@media ${devices.miniMobile} {
		font-size: 70px;
		transform: translateX(-35px);
	}
	@media ${devices.laptop} {
		left: 176px;
		font-size: 230px;
		display: inline-block;
	}
`;

const IconSection = styled.div`
	align-items: center;
	bottom: 16px;
	display: flex;
	justify-content: space-between;
	position: absolute;
	width: 80%;
`;

const IconContainer = styled.div`
	height: 20px;
	position: relative;
	width: 20px;
`;
const SpeakerIconWrapper = styled.div`
	display: block;
	height: 20px;
	width: 90px;
	img {
		height: auto;
		width: 100%;
	}
`;
const EBookLink = styled.span`
	color: ${primaryColor};
`;

const JudgeTeam: React.FC<{ subtitle: string; teamMemberList: TeamMemberProps[] }> = ({
	subtitle,
	teamMemberList
}) => {
	const [open, setOpen] = useState(false);
	const [teamMemberInfo, setTeamMemberInfo] = useState<TeamMemberProps | Record<string, never>>(
		{}
	);
	const handleOpen = (teamMember: TeamMemberProps) => {
		setOpen(true);
		setTeamMemberInfo(teamMember);
	};
	const handleClose = () => {
		setOpen(false);
		setTeamMemberInfo({});
	};
	return (
		<ExpectedSpeakerContainer>
			<Container>
				<SectionSubtitle>{subtitle}</SectionSubtitle>
				<SectionTitle>
					<span>Speakers & </span>
					<span>Advisors, Judges, Mentors</span>
				</SectionTitle>
				<Backdrop>Guests</Backdrop>
				<HomeTeamContainer container spacing={2}>
					<MemberModal open={open} handleClose={handleClose}>
						<InfoHeader>
							{teamMemberInfo.avatarSrc && (
								<ModalAvatarContainer>
									<AvatarImage
										src={teamMemberInfo.avatarSrc}
										alt={teamMemberInfo.name}
										loader={imageLoader}
										fill
										unoptimized
										loading="lazy"
									/>
								</ModalAvatarContainer>
							)}
							<LogoGroup>
								{teamMemberInfo.companySrc && (
									<LogoContainer>
										<Logo
											src={teamMemberInfo.companySrc}
											alt={teamMemberInfo.name}
										/>
									</LogoContainer>
								)}
								{teamMemberInfo.secondCompanySrc && (
									<SecondLogoContainer>
										<Image
											src={teamMemberInfo.secondCompanySrc}
											alt={teamMemberInfo.name}
											loader={imageLoader}
											fill
											objectFit="contain"
											unoptimized
										/>
									</SecondLogoContainer>
								)}
							</LogoGroup>
						</InfoHeader>
						<InfoMainContainer>
							<NameAndTitle>
								<MemberName>{teamMemberInfo.name}</MemberName>
								<ModalSubtitle>{teamMemberInfo.jobTitle}</ModalSubtitle>
							</NameAndTitle>
							<ModalIcons>
								{
									teamMemberInfo.isSpeaker && (
										<SpeakerIconWrapper>
											<img
												className="speakerIcon"
												src={speakerIcon}
												alt="Speaker icon"
											/>
										</SpeakerIconWrapper>
									)
									// : (
									// 	<ModalSpeakerIconPlaceholder />
									// )
								}
								<MemberSocialMedia>
									{teamMemberInfo.socialMedia &&
										Object.entries(teamMemberInfo.socialMedia).map(
											([socialMedia, link]) => {
												if (!link) return null;
												let socialMediaIcon = null;
												switch (socialMedia) {
													case ESocialMedia.LINKED_IN: {
														socialMediaIcon = (
															<IconContainer>
																<Image
																	src={linkedinIcon}
																	alt="linkedin"
																	loader={imageLoader}
																	fill
																	unoptimized
																	loading="lazy"
																/>
															</IconContainer>
														);
														break;
													}
													case ESocialMedia.FACEBOOK: {
														socialMediaIcon = (
															<IconContainer>
																<Image
																	src={facebookIcon}
																	alt="facebook"
																	loader={imageLoader}
																	fill
																	unoptimized
																	loading="lazy"
																/>
															</IconContainer>
														);
														break;
													}
													case ESocialMedia.TWITTER: {
														socialMediaIcon = (
															<IconContainer>
																<Image
																	src={twitterIcon}
																	alt="twitter"
																	loader={imageLoader}
																	fill
																	unoptimized
																	loading="lazy"
																/>
															</IconContainer>
														);
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
														key={`${teamMemberInfo._id}-${socialMedia}`}
													>
														{socialMediaIcon}
													</Link>
												);
											}
										)}
								</MemberSocialMedia>
							</ModalIcons>
						</InfoMainContainer>
						<ModalPostDescription>
							{teamMemberInfo.description}
							{teamMemberInfo.showBookLink && teamMemberInfo.bookTitle && (
								<a
									href={teamMemberInfo.showBookLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									<p>
										<EBookLink>eBook Link: </EBookLink>
										{teamMemberInfo.bookTitle}
									</p>
								</a>
							)}
						</ModalPostDescription>
					</MemberModal>
					{teamMemberList.map(teamMember => {
						return (
							<Grid
								item
								mobile={6}
								tablet={6}
								laptop={4}
								largeLaptop={2.4}
								key={teamMember._id}
								className="relative"
								onClick={() => {
									handleOpen(teamMember);
								}}
							>
								<GridItemContainer isSpeaker={teamMember.isSpeaker === true}>
									<LogoSection>
										{teamMember.companySrc && (
											<LogoWrapper>
												<Logo
													src={teamMember.companySrc}
													alt={teamMember.name}
												/>
											</LogoWrapper>
										)}
									</LogoSection>
									<InfoSection>
										<AvatarContainer>
											<AvatarImage
												loader={imageLoader}
												className="avatar"
												src={teamMember.avatarSrc}
												alt={teamMember.name}
												fill
												unoptimized
											/>
										</AvatarContainer>
										<NameContainer>{teamMember.name}</NameContainer>
										<JobTitleContainer>{teamMember.jobTitle}</JobTitleContainer>
									</InfoSection>
									<IconSection>
										<SpeakerArrowIconWrapper>
											<Image
												className="speakerArrow"
												src={speakerArrow}
												alt="Speaker more info"
												loader={imageLoader}
												width={20}
												height={20}
											/>
										</SpeakerArrowIconWrapper>
									</IconSection>
								</GridItemContainer>
							</Grid>
						);
					})}
				</HomeTeamContainer>
			</Container>
		</ExpectedSpeakerContainer>
	);
};

export default JudgeTeam;
