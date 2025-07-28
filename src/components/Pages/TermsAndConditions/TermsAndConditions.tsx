import styled from 'styled-components';

import { color, devices } from '@/styles/variables';

const Container = styled.div`
	background-color: ${color.blackColor};
	padding: 90px 0 148px 0;
	width: 100%;
`;
const ContentContainer = styled.div`
	margin: 0 auto;
	max-width: 1440px;
	width: calc(100vw - 40px);
	@media ${devices.laptop} {
		max-width: 1440px;
		width: calc(100vw - 200px);
	}
`;
const SubTitle = styled.p`
	color: ${color.primaryColor};
	font-size: 20px;
	font-weight: bold;
	margin: 0;
	padding: 16px 0;
`;
const Description = styled.div`
	color: ${color.whiteColor};
	font-size: 16px;
	margin: 0;
	padding: 0 0 24px 0;
	white-space: pre-wrap;
`;
const Conditions = styled.p`
	margin-top: 30px;
`;

const TermsAndConditions = () => {
	return (
		<Container>
			<ContentContainer>
				<div>
					<SubTitle>1. Acceptance of Terms </SubTitle>
					<Description>
						<p>
							By purchasing a ticket to the &quot;Web3 Convention&quot; on our
							website, you agree to the following terms and conditions. Please read
							them carefully.
						</p>
					</Description>
				</div>
				<div>
					<SubTitle>2. Ticket Purchase</SubTitle>
					<Description>
						<p>You are purchasing your tickets for this Event from:</p>
						<p>METATREE PTY LTD</p>
						<p>ABN: 55 668 836 566</p>
						<p>
							Email:{' '}
							<a href="mailto:info@web3convention.com">info@web3convention.com</a>
						</p>
						<p>
							All transactions are in Australian Dollars (AUD) unless otherwise
							stated.{' '}
						</p>
						<p>
							You may purchase tickets for the &quot;Web3 Convention&quot; on our
							website, subject to availability.
						</p>
						<p>
							All ticket sales are final. Refunds and exchanges will not be provided
							except as required by Australian consumer law.
						</p>
						<p>
							The purchase of a ticket grants you access to the &quot;Web3
							Convention&quot; on the specified date(s) and venue.
						</p>
					</Description>
				</div>
				<div>
					<SubTitle>3. Ticket Usage</SubTitle>
					<Description>
						<p>Tickets are non-transferable unless otherwise stated.</p>
						<p>
							Tickets may not be resold at a price exceeding the price printed on the
							ticket without explicit written permission.
						</p>
						<p>
							Your ticket may be revoked without refund if found to be in violation of
							these terms.
						</p>
					</Description>
				</div>
				<div>
					<SubTitle>4. Event Changes</SubTitle>
					<Description>
						We reserve the right to add, withdraw or substitute speakers, displays or
						entertainment without notice.
					</Description>
				</div>
				<div>
					<SubTitle>5. Event Cancellation</SubTitle>
					<Description>
						In the event of cancellation due to circumstances beyond our control,
						liability is limited to refund of ticket price only.
					</Description>
				</div>
				<div>
					<SubTitle>6. Ticket Distribution and Entry Procedure</SubTitle>
					<Description>
						<p>
							Tickets for the &quot;Web3 Convention&quot; will be distributed at the
							entrance on the day of the convention.
						</p>
						<p>
							To receive your tickets, you must present your valid ticket purchase
							records and personal identification.
						</p>
						<p>
							The name on the ticket purchase records must match the name on the
							identification provided.
						</p>
						<p>
							You are required to wear the issued ID card as your ticket, securely
							hanging it around your neck and visible at all times during the Event.
						</p>
						<p>
							Entry to theconvention will be granted only to individuals with a valid
							and properly worn ID card/ticket.
						</p>
						<p>Defaced, damaged or lost tickets may not be accepted for entry.</p>
						<p>
							Lost or stolen ID cards/tickets will not be reissued. You are
							responsible for the safekeeping of your ID card/tickets.
						</p>
						<p>You are solely responsible for your personal belongings at all times.</p>
						<p>We reserve the right to conduct security searches to ensure safety.</p>
						<p>
							We reserve the right to refuse entry or remove any person from the Event
							at our discretion.
						</p>
					</Description>
				</div>
				<div>
					<SubTitle>7. Processing and Credit Card Fees</SubTitle>
					<Description>
						If there are any processing or credit card fees, these will be calculated
						and Convention to you during purchase. If there is $0 or no value in the
						&apos;Fees&apos; column or fields, that means there are no fees applicable
						to your purchase.
					</Description>
				</div>
				<div>
					<SubTitle>8. Privacy Policy</SubTitle>
					<Description>
						Your personal information is being collected to facilitate your purchase and
						to allow entry to the event. Your information is shared with the Event
						Organiser, to enable them to communicate to you regarding the event. If you
						wish to be removed from any lists please email us at
						<a href="mailto:info@web3convention.com">info@web3convention.com</a>.
					</Description>
				</div>
				<div>
					<SubTitle>9.Limitation of Liability</SubTitle>
					<Description>
						Web3 Convention shall not be liable for any loss, injury or damage sustained
						at or in connection with the Event.
					</Description>
				</div>
				<div>
					<SubTitle>10. Disclaimer, Terms and Conditions</SubTitle>
					<Description>
						By entering your details you are agreeing to the terms and conditions listed
						below. By scanning your QR Code at any exhibitor, you are agreeing for your
						details to be supplied to them and to their Terms and Conditions. (See
						exhibitor&apos;s stands for more details). To view the Organiser&apos;s
						Terms & Conditions, click here.
					</Description>
				</div>
				<div>
					<SubTitle>Definitions</SubTitle>
					<Description>
						<Conditions>
							(a) &quot;web&quot; or &quot;website&quot; or &quot;site&quot; means the
							system or database on which the personal information is stored; (b)
							&quot;You&quot; or &quot;your&quot; means Web3 Convention (WEB3 PTY.
							LTD.), &quot;I,&quot; &quot;my,&quot; or &quot;me&quot; means the person
							who has entered information into any electronic form on a site.
						</Conditions>
						<Conditions>
							(d) &quot;information&quot; or &quot;personal information&quot; means
							any information entered into any electronic form that may identify a
							person (e) &quot;Convention&quot; means the event for which you
							registered.
						</Conditions>
					</Description>
				</div>
				<div>
					<SubTitle>General</SubTitle>
					<Description>
						<Conditions>
							I confirm that the information I have entered is completely accurate,
							and in particular, I have taken care to ensure that my email address is
							correctly entered.
						</Conditions>
						<Conditions>
							I agree and consent to my personal information being utilized for
							current and future competitions, draws, lotteries, and promotions by the
							promoters and exhibitors of the Convention.
						</Conditions>
						<Conditions>
							I agree and consent to, for promotional purposes, you providing the
							information I have entered into any electronic form on your site to
							entities/businesses attached, related, affiliated, or associated to the
							Convention, including but not limited to the Event Organiser,
							presenters, sponsors, exhibitors, and suppliers.
						</Conditions>
						<Conditions>
							I agree that by my entering into any competitions at the Convention, I
							agree and consent to my personal information being utilized by such
							competition for the competition purposes and the promoter of the
							competition and authorize the publication of my details as they relate
							to the competition.
						</Conditions>
						<Conditions>
							I agree that you will not be liable to me, except in the case of fraud,
							for any act or omission (whether negligent or misleading or deceptive or
							otherwise) by you in the performance or purported performance of your
							obligations under these terms and conditions.
						</Conditions>
						<Conditions>
							I indemnify you against all claims, except in the case of fraud, arising
							out of or in any way connected with any act or omission by you in the
							performance or purported performance of your obligations under these
							terms and conditions.
						</Conditions>
						<Conditions>
							{' '}
							I agree that liability on your part or on the part of your servants or
							agents for damages for or in respect of any claim arising out of or in
							connection with the relationship established by this agreement or any
							conduct under it or any orders or instructions given to you by me, shall
							not in any event (and whether or not such liability results from or
							involves negligence) exceed $50.00.
						</Conditions>
						<Conditions>
							I agree that by my entering information into any electronic form on your
							site, that I am agreeing to the terms and conditions herein and to the
							Disclaimer.
						</Conditions>
						<Conditions>
							By purchasing a ticket for the &quot;Web3 Convention,&quot; you agree to
							the above terms and conditions.
						</Conditions>
					</Description>
				</div>
				<div>
					<SubTitle>Governing Law</SubTitle>
					<Description>
						These Terms are governed by the laws of New South Wales, Australia.
					</Description>
				</div>
			</ContentContainer>
		</Container>
	);
};

export default TermsAndConditions;
