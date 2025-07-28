import styled from 'styled-components';

import { color, devices } from '@/styles/variables';

const { blackColor, primaryColor, whiteColor } = color;

const OpportunityWrapper = styled.div`
	background-color: ${blackColor};
	background-image: url('/images/startup/sponsorship-opportunity.png');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
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

const Title = styled.h1`
	color: ${whiteColor};
	font-size: 40px;
	font-weight: bold;
	margin: 0 auto;
`;
const SponsorType = styled.div`
	background-color: rgba(0, 0, 0, 0.49);
	border: solid 1px ${whiteColor};
	display: flex;
	flex-direction: column;
	margin-top: 40px;
	padding: 40px;
	@media ${devices.mobile} {
		flex-direction: row;
		padding: 68px;
	}
`;
const Sponsor = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	gap: 20px;
	@media ${devices.mobile} {
		width: 280px;
	}
`;

const SponsorTitle = styled.h3`
	color: ${primaryColor};
	font-size: 24px;
	font-weight: bold;
	margin: 30px auto;
`;
const SponsorContent = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	&::before {
		background-color: ${whiteColor};
		content: '';
		height: 1px;
		left: 0;
		position: absolute;
		top: -20px;
		width: 66px;
	}
`;
const Content = styled.p`
	color: ${whiteColor};
	font-size: 16px;
	line-height: 1.5;
	margin: 0 auto;
`;
const Opportunity = () => {
	return (
		<OpportunityWrapper>
			<ContentWrapper>
				<Title>Sponsorship Opportunity</Title>
				<SponsorType>
					<Sponsor>
						<SponsorTitle>
							Interested in becoming a sponsor? Let us explore how your organization
							can gain from supporting our startup competition.
						</SponsorTitle>
						<SponsorContent>
							<Content>
								For partnership details and opportunities, contact us:
							</Content>
							<Content>
								Email:
								<a href="mailto:business@web3convention.com">
									business@web3convention.com
								</a>
							</Content>
						</SponsorContent>
					</Sponsor>
				</SponsorType>
			</ContentWrapper>
		</OpportunityWrapper>
	);
};

export default Opportunity;
