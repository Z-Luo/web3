/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

import { color, devices } from '@/styles/variables';

const Container = styled.div`
	background-color: ${color.blackColor};
	padding: 24px;
	width: 100%;
`;
const ContentWrapper = styled.div`
	margin: 0 auto;
	max-width: 700px;
	@media ${devices.largeLaptop} {
		max-width: 1440px;
		width: calc(100vw - 720px);
	}
`;
const SubTitle = styled.p`
	color: ${color.primaryColor};
	font-size: 20px;
	font-weight: bold;
	margin: 0;
	padding: 16px 0;
`;
const Description = styled.p`
	color: ${color.whiteColor};
	font-size: 16px;
	line-height: 1.63;
	margin: 0;
	padding: 0 0 24px 0;
	white-space: pre-wrap;
`;
const PointList = styled.ul`
	color: ${color.whiteColor};
	font-size: 16px;
	line-height: 1.63;
	margin: 0;
	padding: 0 0 24px 16px;
	white-space: pre-wrap;
`;

const AntiHarassment = () => {
	return (
		<Container>
			<ContentWrapper>
				<div>
					<SubTitle>1. Purpose:</SubTitle>
					<Description>
						Web3 Convention is committed to providing a safe and welcoming environment
						for all attendees, including but not limited to, speakers, volunteers,
						exhibitors, sponsors, and other participants. Harassment or discrimination
						in any form will not be tolerated, and this policy outlines our commitment
						to maintaining a harassment-free space for everyone.
					</Description>
				</div>
				<div>
					<SubTitle>2. Scope:</SubTitle>
					<Description>
						This policy applies to all Web3 Convention events and activities, including
						conferences, workshops, parties, and any other related gatherings. It
						applies to all participants, including attendees, speakers, sponsors,
						exhibitors, organizers, and staff.
					</Description>
				</div>
				<div>
					<SubTitle>3. Definition of Harassment:</SubTitle>
					<Description>
						Harassment is defined as any unwelcome conduct or communication based on an
						individual's race, gender, sexual orientation, gender identity or
						expression, disability, physical appearance, religion, national origin, age,
						or any other protected status. Harassment can take various forms, including
						but not limited to:
					</Description>
					<PointList>
						<li>
							Offensive verbal comments related to gender, gender identity and
							expression, sexual orientation, disability, physical appearance, body
							size, race, religion.
						</li>
						<li>Visual harassment, such as inappropriate images or gestures.</li>
						<li>Sustained disruption of talks or other events.</li>
						<li>Unwanted physical contact.</li>
						<li>Intimidation, stalking, or following.</li>
						<li>Inappropriate use of social media or other communication channels.</li>
						<li>Unwelcome sexual attention</li>
					</PointList>
					<Description>
						Participants asked to stop any harassing behavior are expected to comply
						immediately.
					</Description>
				</div>
				<div>
					<SubTitle>4. Reporting Procedure:</SubTitle>
					<Description>
						If you experience or witness harassment at Web3 Convention, please take the
						following steps:
						<br />
						If you feel safe doing so, inform the individual that their behavior is
						unwelcome and ask them to stop.
						<br />
						Contact Web3 Convention staff or security immediately. You can identify
						staff members by their badges or ask at the registration desk.
						<br />
						You may also email us at info@web3convention.com to report an incident.
						<br />
						All reports will be kept confidential to the extent possible, and we will
						respect your privacy and preferences throughout the process.
						<br />
					</Description>
				</div>
				<div>
					<SubTitle>5. Enforcement:</SubTitle>
					<Description>
						Web3 Convention staff will respond promptly to any reported incidents and
						may take appropriate actions, including but not limited to:
						<br />
						Issuing a warning to the offending party.
						<br />
						Asking the offender to leave the event without a refund.
						<br />
						Contacting law enforcement, if necessary.
						<br />
						Banning the offender from future Web3 Convention events.
						<br />
					</Description>
				</div>
				<div>
					<SubTitle>6. No Retaliation:</SubTitle>
					<Description>
						Web3 Convention prohibits retaliation against individuals who report
						harassment in good faith. Retaliation includes any adverse action taken
						against a person who has reported harassment, even if the underlying report
						is not substantiated.
					</Description>
				</div>
				<div>
					<SubTitle>7. Attendee Responsibility:</SubTitle>
					<Description>
						All attendees, speakers, sponsors, exhibitors, and staff are responsible for
						adhering to this Anti-harassment Policy. We encourage everyone to be
						respectful and to help create a safe and inclusive environment for all
						participants.
						<br />
						We expect participants to follow these rules at all conference venues,
						conference-related social events, and on social media.
						<br />
					</Description>
				</div>
				<div>
					<SubTitle>8. Review and Updates:</SubTitle>
					<Description>
						Web3 Convention may update this policy as necessary to ensure its
						effectiveness. Any changes will be communicated to all participants.
					</Description>
				</div>
				<div>
					<SubTitle>9. Contact Information:</SubTitle>
					<Description>
						If you have questions or need to report an incident, please contact us at
						<a href="mailto:info@web3convention.com">info@web3convention.com</a>
					</Description>
				</div>
			</ContentWrapper>
		</Container>
	);
};
export default AntiHarassment;
