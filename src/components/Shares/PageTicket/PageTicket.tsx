import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { backdrop, sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { color, devices, sizes } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const HomeTicketContainer = styled.div`
	max-width: ${`${sizes.largeLaptop}px`};
	padding: 80px 15px;
	position: relative;
	@media ${devices.laptop} {
		margin: 0 auto;
	}
`;

const Title = styled.h2`
	${sectionTitle};
	margin-bottom: 32px;
	max-width: 360px;
`;

const Subtitle = styled.p`
	${sectionSubtitle};
`;
const Highlight = styled.p`
	background-color: #f66f52;
	border-radius: 2px;
	color: ${color.whiteColor};
	font-size: 16px;
	font-weight: bold;
	margin-bottom: 32px;
	padding: 5px 16px;
	width: fit-content;
`;

const Backdrop = styled.div`
	${backdrop};
	left: 5vw;
	z-index: -1;
	@media ${devices.mobile} {
		left: 2vw;
	}
`;

const TicketGrid = styled(Grid)`
	border: solid 1px ${color.black};
	border-radius: 2px;
`;

const TicketTitleContainer = styled.div`
	align-items: center;
	background-color: ${color.primaryColor};
	display: flex;
	justify-content: center;
	padding-bottom: 12px;
	padding-top: 12px;
	width: 100%;
`;
const TicketTitle = styled.h3`
	color: ${color.black};
	font-size: 22px;
	font-weight: bold;
	margin: 0 0;
`;
const BookContainer = styled.div`
	align-items: center;
	border-bottom: dashed 1px ${color.black};
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 12px;
	padding-bottom: 24px;
	padding-top: 16px;
`;
const PriceContainer = styled.div`
	align-items: end;
	display: flex;
	flex-direction: row;
	gap: 4px;
`;
const Price = styled.p`
	color: ${color.white};
	font-size: 48px;
	font-weight: bold;
	line-height: 48px;
	margin: 0 0;
`;
const PriceSub = styled.p`
	font-size: 16px;
	margin: 0 0;
`;
const OriginalPrice = styled.p`
	color: #666;
	font-size: 16px;
`;
const BookBtn = styled(Link)`
	background-color: ${color.primaryColor};
	border-radius: 30px;
	font-size: 14px;
	font-weight: bold;
	margin-top: 10px;
	padding: 16px 26px;
`;
const FeatureContainer = styled.div`
	margin: 24px 0;
	width: 100%;
`;
const FeatureItemContainer = styled.div<{ bgColor: string }>`
	align-items: center;
	background-color: ${props => props.bgColor || ''};
	display: flex;
	padding: 6px 14px;
	width: 100%;
`;
const FeatureItemText = styled.p`
	font-size: 14px;
	line-height: 14px;
	margin-left: 8px;
`;

const ticketConfig = [
	{
		_id: '1',
		title: 'General Admission',
		price: '$218+GST 40%OFF',
		priceIncGST: false,
		earlyBirdPrice: 130,
		earlyBirdPriceIncGST: true,
		earlyBirdEndDate: '2024-03-21T14:00:00.000Z',
		thumbnailSrc: '/images/tickets/general-admission.png',
		features: [
			'2-day pass',
			'All keynote sessions',
			'General networking',
			'Access to the event app to network with the community prior to the event',
			'Access to all side events',
			'Access to Community House'
		]
	},
	{
		_id: '2',
		title: 'Premium GA',
		price: '$268+GST 40%OFF',
		priceIncGST: true,
		earlyBirdPrice: 160,
		earlyBirdPriceIncGST: false,
		earlyBirdEndDate: '2024-03-21T14:00:00.000Z',
		thumbnailSrc: '/images/tickets/premium-admission.png',
		features: [
			'2-day pass',
			'All keynote sessions',
			'General networking',
			'Access to the event app to network with the community prior to the event',
			'Access to all side events',
			'Access to Community House',
			'Access to Cyber Party'
		]
	},
	{
		_id: '3',
		title: 'VIP/Whale Pass',
		price: '$2585+GST 40%OFF',
		priceIncGST: false,
		earlyBirdPrice: 1551,
		earlyBirdPriceIncGST: false,
		thumbnailSrc: '/images/tickets/vip.png',
		earlyBirdEndDate: '2024-03-21T14:00:00.000Z',
		features: [
			'2-day pass',
			'All keynote sessions',
			'General networking',
			'Access to the event app to network with the community prior to the event',
			'Access to all side events',
			'Access to Community House',
			'Access to Cyber Party',
			'Access to VIP Party',
			'Fast track entry to the event',
			'Access to the VIP Lounge - Sponsored',
			'Access to Startup Pitch House',
			"Exclusive networking with whales, business leaders, influencers, VC's and innovators",
			'Coffee & Tea provided',
			'Catered lunch and drinks'
		]
	},
	{
		_id: '4',
		title: 'Student Pass',
		price: '$63+GST 40%OFF',
		priceIncGST: false,
		earlyBirdPrice: 38,
		earlyBirdPriceIncGST: false,
		thumbnailSrc: '/images/tickets/vip.png',
		earlyBirdEndDate: '2024-03-21T14:00:00.000Z',
		features: [
			'2-day pass',
			'All keynote sessions',
			'General networking',
			'Access to the event app to network with the community prior to the event',
			'Access to all side events',
			'Access to Community House',
			'Access to Cyber Party'
		]
	}
];

const PageTicket: React.FC = () => {
	return (
		<HomeTicketContainer>
			<Subtitle>AI + Web3 Convention 2024</Subtitle>
			<Title>Are You with Us? Book Tickets</Title>
			<Highlight>
				40% discount from 1 January - 29 February 2024, Book your tickets now.
			</Highlight>
			<Backdrop>Tickets</Backdrop>
			<Grid container gap="8px">
				{ticketConfig.map(ticket => {
					const earlyBirdPriceValid =
						ticket.earlyBirdPrice && dayjs().isBefore(dayjs(ticket.earlyBirdEndDate));
					const price = earlyBirdPriceValid ? ticket.earlyBirdPrice : ticket.price;
					return (
						<TicketGrid miniMobile={12} laptop={5} largeLaptop={2.9} key={ticket._id}>
							<TicketTitleContainer>
								<TicketTitle>{ticket.title}</TicketTitle>
							</TicketTitleContainer>
							<BookContainer>
								<PriceContainer>
									<PriceSub>AUD</PriceSub>
									<Price>{price}</Price>
									<PriceSub>+GST</PriceSub>
								</PriceContainer>
								<OriginalPrice>{ticket.price}</OriginalPrice>
								<BookBtn href="https://w3con.eventsair.com/web3convention/registration/Site/Register">
									BOOK NOW
								</BookBtn>
							</BookContainer>
							<FeatureContainer>
								{ticket.features.map((feature, index) => (
									<FeatureItemContainer
										key={feature}
										bgColor={index % 2 === 0 ? '#f4f4f4' : '#fff'}
									>
										<Image
											src="/images/icons/price-feature.svg"
											alt="price-feature"
											loader={imageLoader}
											unoptimized
											width={12}
											height={12}
										/>
										<FeatureItemText>{feature}</FeatureItemText>
									</FeatureItemContainer>
								))}
							</FeatureContainer>
						</TicketGrid>
					);
				})}
			</Grid>
		</HomeTicketContainer>
	);
};

export default PageTicket;
