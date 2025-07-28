import { Grid } from '@mui/material';
import Image from 'next/image';
import styled from 'styled-components';

import ThemeButton from '@/components/Shares/ThemeButton';
import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { primaryColor } = color;

interface IGridContentAlignment {
	alignment: 'left' | 'right';
}

const Container = styled.div`
	margin: 0 auto;
	max-width: 1920px;
	padding: 0 24px;
	@media ${devices.largeLaptop} {
		padding: 0 100px;
	}
`;

const ReversedGrid = styled(Grid)`
	@media ${devices.laptop} {
		flex-direction: row-reverse;
	}
`;

const ImageContainer = styled.div`
	height: 100%;
	padding-top: 100%;
	position: relative;
`;

const StyledGrid = styled(Grid)`
	background-color: #000;
`;

const ContentContainer = styled.div`
	color: #fff;
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-between;
	padding: 72px 16px;
	@media ${devices.laptop} {
		padding: 48px 36px;
	}
	@media ${devices.largeLaptop} {
		padding: 72px 56px;
	}
`;

const GridLabel = styled.p<IGridContentAlignment>`
	color: #1d1d1d;
	display: none;
	font-size: 6.25vw;
	font-weight: bold;
	margin: 0;
	@media ${devices.laptop} {
		display: block;
		text-align: ${props => props.alignment};
	}
	@media ${devices.desktop} {
		margin-top: 16px;
		font-size: 120px;
	}
`;

const GridContent = styled.div<IGridContentAlignment>`
	margin-top: 155px;
	@media ${devices.laptop} {
		margin-top: 0;
		max-width: 544px;
		margin-left: ${props => (props.alignment === 'left' ? '0' : 'auto')};
	}
`;

const Title = styled.h3`
	font-size: 40px;
	font-weight: bold;
	margin: 0;
`;

const Subtitle = styled.p`
	color: ${primaryColor};
	font-size: 16px;
`;

const Description = styled.p`
	font-size: 16px;
	line-height: 1.5;
	margin-top: 32px;
`;

const ButtonGroup = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
	margin-top: 32px;
`;

const PartnershipSponsorshipSegment = () => {
	return (
		<Container>
			<Grid container>
				<Grid item miniMobile={12} largeLaptop={6}>
					<ImageContainer>
						<Image
							src="/images/partners/sponsorship.png"
							alt="sponsorship"
							fill
							loader={imageLoader}
						/>
					</ImageContainer>
				</Grid>
				<StyledGrid item miniMobile={12} largeLaptop={6}>
					<ContentContainer>
						<GridLabel alignment="left">Sponsorship</GridLabel>
						<GridContent alignment="left">
							<Title>Sponsorship</Title>
							<Subtitle>
								Sponsorship Opportunity / Sponsorship Packages / Networking Events
							</Subtitle>
							<Description>
								The AI + Web3 Convention 2024 offers exhibitors a chance to
								intimately engage with an enthusiastic audience. Inquire today to
								explore how you can showcase your brand, pioneering products, and
								services that are at the forefront of artificial intelligence, Web3
								technology and future technology, and more. Let your brand shine
								amidst innovation!
							</Description>
							<ButtonGroup>
								<ThemeButton href="/contact-us">ENQUIRE NOW</ThemeButton>
								<ThemeButton href="https://w3con.eventsair.com/ExhibitionPortal/Account/Login?ReturnUrl=%2FExhibitionPortal%2Fweb3convention%2Fexhibition">
									BOOK STAND ONLY
								</ThemeButton>
							</ButtonGroup>
						</GridContent>
					</ContentContainer>
				</StyledGrid>
			</Grid>
			<ReversedGrid container>
				<Grid item miniMobile={12} largeLaptop={6}>
					<ImageContainer>
						<Image
							src="/images/partners/partnership.png"
							alt="partnership"
							fill
							loader={imageLoader}
						/>
					</ImageContainer>
				</Grid>
				<StyledGrid item miniMobile={12} largeLaptop={6}>
					<ContentContainer>
						<GridLabel alignment="right">Partnership</GridLabel>
						<GridContent alignment="right">
							<Title>Partnership</Title>
							<Subtitle>Community Partner / Media Partner</Subtitle>
							<Description>
								Join us at the AI + Web3 Convention 2024, where innovation meets
								exploration.{` We've `}partnered with a diverse array of visionary
								brands to amplify curiosity and enhance the experiences of our
								attendees, celebrating the intersection of artificial intelligence,
								Web3 technology and future technology. Eager to be part of this
								groundbreaking event? Reach out today and uncover the myriad
								opportunities awaiting you at the AI + Web3 Convention 2024.
							</Description>
							<ButtonGroup>
								<ThemeButton href="/contact-us">ENQUIRE NOW</ThemeButton>
							</ButtonGroup>
						</GridContent>
					</ContentContainer>
				</StyledGrid>
			</ReversedGrid>
		</Container>
	);
};
export default PartnershipSponsorshipSegment;
