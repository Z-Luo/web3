import React from 'react';
import styled from 'styled-components';

import { sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';

const { blackColor, primaryColor, whiteColor } = color;

const TimelineContainer = styled.div`
	background-color: ${blackColor};
	padding: 24px;
	width: 100%;
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 96px auto;
	max-width: 1440px;
	width: 100%;
	@media ${devices.tablet} {
		padding: 0 40px;
	}
`;

const Subtitle = styled.p`
	${sectionSubtitle};
`;
const Title = styled.h2`
	${sectionTitle};
	color: ${whiteColor};
	margin-bottom: 20px;
	max-width: 264px;
	@media ${devices.mobile} {
		max-width: 100%;
	}
`;
const FirstLine = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 64px;
	position: relative;
	&::after {
		background-color: ${whiteColor};
		bottom: 0;
		content: '';
		height: 1px;
		left: 0;
		position: absolute;
		width: 90%;
	}
	@media ${devices.mobile} {
		flex-direction: row;
	}
`;
const Session = styled.div`
	border-left-color: ${whiteColor};
	border-left-style: dashed;
	border-left-width: 1px;
	display: flex;
	flex-direction: column;
	height: 249px;
	padding: 0 60px 60px 30px;
	position: relative;
	width: 360px;
	&::before,
	&::after {
		border-radius: 50%;
		content: '';
		height: 10px;
		left: -6px;
		position: absolute;
		width: 10px;
	}
	&::before {
		background-color: ${blackColor};
		border: solid 1px ${primaryColor};
		top: 0;
		transform: translateY(-50%);
	}
	&::after {
		background-color: ${whiteColor};
		bottom: 0;
		height: 6px;
		left: -4px;
		transform: translateY(50%);
		width: 6px;
	}
`;
const SessionTitle = styled.span`
	color: ${whiteColor};
	font-size: 20px;
	font-weight: bold;
	margin-top: 30px;
`;
const TimeStamp = styled.span`
	color: ${primaryColor};
	font-size: 20px;
	font-weight: bold;
`;
const SessionInfo = styled.li`
	color: ${whiteColor};
	font-size: 14px;
	padding-top: 20px;
`;

const SecondLine = styled.div`
	display: flex;
	flex-direction: column;
	@media ${devices.mobile} {
		flex-direction: row;
		margin-left: 185px;
	}
`;
const SecondSession = styled.div`
	border-left-color: ${whiteColor};
	border-left-style: dashed;
	border-left-width: 1px;
	display: flex;
	flex-direction: column;
	height: 249px;
	padding: 0 60px 60px 30px;
	position: relative;
	width: 360px;
	&::before,
	&::after {
		border-radius: 50%;
		content: '';
		height: 6px;
		position: absolute;
		width: 6px;
	}
	&::before {
		background-color: ${whiteColor};
		top: 0;
		transform: translateY(-50%);
		left: -4px;
	}
	&::after {
		background-color: ${blackColor};
		border: solid 1px ${primaryColor};
		bottom: 0;
		height: 10px;
		left: -7px;
		transform: translateY(50%);
		width: 10px;
	}
`;

const Timeline = () => {
	return (
		<TimelineContainer>
			<ContentWrapper>
				<Subtitle>AI + Web3 Convention 2024</Subtitle>
				<Title>Event Timeline</Title>
				<FirstLine>
					<Session>
						<SessionTitle>Application & Screening</SessionTitle>
						<TimeStamp>(From DEC 2023)</TimeStamp>
						<SessionInfo>
							Entrepreneurs submit their business plans, product demos, or prototypes.
						</SessionInfo>
						<SessionInfo>
							A panel of judges selects the most promising teams.{' '}
						</SessionInfo>
					</Session>
					<Session>
						<SessionTitle>Preparation & Additional Mentorship</SessionTitle>
						<TimeStamp>(From APR Week 3)</TimeStamp>
						<SessionInfo>
							Entrepreneurs submit their business plans, product demos, or prototypes.
						</SessionInfo>
						<SessionInfo>
							A panel of judges selects the most promising teams.{' '}
						</SessionInfo>
					</Session>
					<Session>
						<SessionTitle>Grand Finale </SessionTitle>
						<TimeStamp>(18 May, 2024)</TimeStamp>
						<SessionInfo>Teams pitch and showcase innovations live. </SessionInfo>
						<SessionInfo>
							A prestigious panel, including representatives from the 30 VC firms,
							will evaluate the pitches.
						</SessionInfo>
					</Session>
				</FirstLine>
				<SecondLine>
					<SecondSession>
						<SessionTitle>Mentorship</SessionTitle>
						<TimeStamp>(Week 1-2, APR, 2024)</TimeStamp>

						<SessionInfo>
							Teams refine their pitches and demonstrations through online webinars,
							workshops, and one-on-one mentor sessions.
						</SessionInfo>
						<SessionInfo>
							Chosen teams present their pitches and demos online.{' '}
						</SessionInfo>
						<SessionInfo>Judges select the finalists.</SessionInfo>
					</SecondSession>
					<SecondSession>
						<SessionTitle>Welcome Party</SessionTitle>
						<TimeStamp>(17 May, 2024)</TimeStamp>
						<SessionInfo>
							Host a welcome party in Queensland Parliament House.{' '}
						</SessionInfo>
					</SecondSession>
					<SecondSession>
						<SessionTitle>Judging &amp; Award Ceremony </SessionTitle>
						<TimeStamp>(19 May, 2024)</TimeStamp>

						<SessionInfo>
							Based on criteria like innovation, market potential, team capability,
							and feasibility, winners are selected.
						</SessionInfo>
						<SessionInfo>
							Post-pitch, start-ups have dedicated networking and discussion sessions
							with interested VC firms.
						</SessionInfo>
					</SecondSession>
				</SecondLine>
			</ContentWrapper>
		</TimelineContainer>
	);
};

export default Timeline;
