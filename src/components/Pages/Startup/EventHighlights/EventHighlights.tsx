import Image from 'next/image';
import styled from 'styled-components';

import { sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { color, devices, sizes } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { blackColor, primaryColor, whiteColor } = color;

const EventHighlightsContainer = styled.div`
	background-color: ${blackColor};
	padding: 24px;
	width: 100%;
`;

const ContentWrapper = styled.div`
	margin: 96px auto;
	max-width: 1440px;
	width: 100%;
	@media ${devices.tablet} {
		padding: 0 40px;
	}
`;

const TitleContainer = styled.div`
	color: ${blackColor};
	@media ${devices.laptop} {
		margin-right: 80px;
		margin-bottom: 60px;
		max-width: ${`${sizes.largeLaptop}px`};
	}
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

const Subtitle = styled.p`
	${sectionSubtitle};
`;

const InformationContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 56px;

	@media ${devices.laptop} {
	}
`;

const DescriptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 56px;
	justify-content: space-between;
	@media ${devices.laptop} {
		flex-direction: row;
	}
`;

const DescriptionItem = styled.div`
	color: ${whiteColor};
	display: flex;
	flex-direction: column;
	gap: 16px;
	max-width: 540px;
`;

const Description = styled.div`
	color: ${whiteColor};
	line-height: 1.5;
`;

const TitleHelper = styled.div`
	color: ${primaryColor};
	font-weight: bold;
`;

const StyledImage = styled(Image)`
	object-fit: contain;
	@media ${devices.mobile} {
		width: 500px;
		height: 170px;
	}
	@media ${devices.laptop} {
		width: 900px;
		height: 300px;
	}

	@media ${devices.largeLaptop} {
		width: 1360px;
		height: 440px;
	}
`;

const EventHighlights = () => {
	return (
		<EventHighlightsContainer>
			<ContentWrapper>
				<TitleContainer>
					<Subtitle>AI + Web3 Convention 2024</Subtitle>
					<Title>Event Highlights - A Two-Stage Showcase</Title>
				</TitleContainer>
				<InformationContainer>
					<DescriptionContainer>
						<DescriptionItem>
							<TitleHelper>Stage 1</TitleHelper>
							<Description>
								<b>Start-up Competition</b>
							</Description>
							<Description>
								Startups Spectrum Expect a rich tapestry of startups—spanning
								sectors like FinTech, HealthTech, PropTech, and more. Estimated
								combined valuation: $500M.&quot; (Seed and Angel Funding Rounds)
							</Description>
							<Description>
								The inaugural stage of the event focuses on emerging start-ups
								seeking their initial funding. The Start-up Competition is a dynamic
								platform designed to showcase innovative ideas and projects, opening
								doors for those in the Seed and Angel funding rounds to secure the
								necessary financial support. Entrepreneurs will present their
								ventures, highlighting the potential for growth and impact to a
								panel of seasoned investors.
							</Description>
						</DescriptionItem>
						<DescriptionItem>
							<TitleHelper>Stage 2</TitleHelper>
							<Description>
								<b>Special Features</b>
							</Description>
							<Description>
								&quot;Dedicated VC zones, startup-VC speed dating sessions,
								exclusive VC luncheons with keynote founders, and closed-door pitch
								sessions.&quot;
							</Description>
							<Description>
								A dedicated staff member to ensure smooth networking can be a great
								value-add for startups, offering them the ease to focus solely on
								building meaningful connections.
							</Description>
						</DescriptionItem>
					</DescriptionContainer>

					<StyledImage
						loader={imageLoader}
						src="/images/startup/event-highlights.png"
						alt="event highlights"
						unoptimized
						width={300}
						height={100}
					/>
				</InformationContainer>
			</ContentWrapper>
		</EventHighlightsContainer>
	);
};

export default EventHighlights;
