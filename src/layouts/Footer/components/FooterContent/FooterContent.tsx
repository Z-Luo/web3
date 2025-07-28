import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import SubscriptionModal from '@/components/Shares/SubscriptionModal';
import useSubscription from '@/hooks/userSubscription';
import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { blackColor, primaryColor, whiteColor } = color;

const countryImage = '/images/country-1.png';
const secondCountryImage = '/images/country-2.png';

// Styles

const ContentContainer = styled(Box)`
	align-items: center;
	background-color: ${blackColor};
	color: ${whiteColor};
	display: flex;
	flex-direction: column;
	padding: 50px 0;
`;

const ContainerGrid = styled(Grid)`
	@media ${devices.largeLaptop} {
		max-width: 1440px;
	}
	justify-content: space-between;
	width: calc(100vw - 48px);
`;

const Title = styled.h5`
	font-size: 16px;
	line-height: 1.25;
	margin: 0;
	margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
	font-size: 14px;
	line-height: 1.43;
	margin-bottom: 12px;
	&:hover {
		color: ${primaryColor};
		cursor: pointer;
	}
`;

const LogoContainer = styled.div`
	display: flex;
	justify-content: start;
	@media ${devices.largeLaptop} {
		max-width: 1440px;
	}
	width: calc(100vw - 48px);
`;
const Logo = styled(Image)`
	margin: 0 0 40px 10px;
`;
const ContentText = styled.p`
	font-size: 14px;
	line-height: 1.43;
	margin-top: 0;
`;

const QRcodeGridItem = styled(Grid)`
	align-items: center;
	display: flex;
	flex-direction: column;
	font-size: 14px;
	line-height: 1.43;
`;

const DisclaimerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
	@media ${devices.largeLaptop} {
		max-width: 1440px;
	}
	width: calc(100vw - 48px);
`;

const DisclaimerTitle = styled.h3`
	font-size: 16px;
	font-weight: bold;
`;
const DisclaimerContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	@media ${devices.mobile} {
		flex-direction: row;
	}
`;
const FlagImage = styled.div`
	height: 50px;
	width: 72px;
`;
const DisclaimerContent = styled.div`
	font-size: 14px;
`;
// Configuration
const eventsConfig = [
	{
		label: 'Startup Competition',
		path: '/startup'
	},
	{
		label: 'Capital Connect',
		path: '/convention'
	},
	{
		label: 'VIP / Cyber Party',
		path: '/convention'
	},
	{
		label: 'Side Events',
		path: 'convention'
	},
	{
		label: '2023 Web3 Career Forum',
		path: 'https://www.youtube.com/watch?v=sdXh3m9bTso'
	},
	{
		label: '2023 Web3 Hackathon',
		path: '/hackathon'
	}
];
const partnersConfig = [
	{
		label: '2024 Partners',
		path: '/previous-partner'
	},
	{
		label: 'Sponsor Partners',
		path: '/partners'
	},
	{
		label: 'Community Partners',
		path: '/partners'
	},
	{
		label: 'Media Partners',
		path: '/partners'
	}
];
const linkConfigList = [
	{
		label: 'Book Tickets',
		path: 'https://w3con.eventsair.com/web3convention/registration/Site/Register'
	},
	{
		label: 'Partner with Us',
		path: '/partners'
	},
	{
		label: 'Agenda',
		path: '/agenda'
	},
	{
		label: 'Volunteers',
		path: 'https://w3con.eventsair.com/web3convention/atv'
	},
	{
		label: 'Travel',
		path: '/travel'
	}
];
const qrCodes = [
	{
		_id: 'linkedin',
		src: '/images/qr-code/linkedin.webp',
		alt: 'Linkedin',
		link: 'https://www.linkedin.com/company/web3convention/'
	},
	{
		_id: 'X',
		src: '/images/qr-code/x.webp',
		alt: 'X',
		link: 'https://twitter.com/Web3Convention'
	},
	{
		_id: 'telegram',
		src: '/images/qr-code/telegram.webp',
		alt: 'Telegram',
		link: 'https://t.me/+_vbKyXR2wJlmYmJl'
	},
	{
		_id: 'youtube',
		src: '/images/qr-code/youtube.webp',
		alt: 'Youtube',
		link: 'https://www.youtube.com/channel/UCTJEa6rxybFHmmlx6YAf1iA'
	},
	{
		_id: 'instagram',
		src: '/images/qr-code/instagram.webp',
		alt: 'Instagram',
		link: 'https://www.instagram.com/web3convention/'
	},
	{
		_id: 'eventbrite',
		src: '/images/qr-code/eventbrite.webp',
		alt: 'Eventbrite',
		link: 'https://web3convention.eventbrite.com/'
	}
];

const FooterContent = () => {
	const [emailInput, setEmailInput] = useState<string>('');
	const [inputMessage, setInputMessage] = useState<string>('');
	const { message, openModal, setOpenModal } = useSubscription(emailInput, setEmailInput);

	useEffect(() => {
		if (inputMessage) setInputMessage('');
	}, [emailInput]);

	const handleClose = () => {
		setOpenModal(false);
	};

	return (
		<ContentContainer sx={{ flexGrow: 1 }} className="flex justify-center">
			<LogoContainer>
				<Logo
					loader={imageLoader}
					unoptimized
					src="/web3-logo-white.svg"
					alt="logo"
					width={150}
					height={50}
					priority
				/>
			</LogoContainer>
			<ContainerGrid
				container
				spacing={{
					mobile: 3,
					largeLaptop: 0
				}}
			>
				<Grid item mobile={12} tablet={6} laptop={6} largeLaptop={2.8}>
					<Title>Get in touch</Title>
					<div className="flex flex-col">
						<StyledLink href="/comingSoon">About Us</StyledLink>
						<StyledLink href="/contact-us">Contact Us</StyledLink>
					</div>
					<ContentText>
						Information:{' '}
						<a href="mailto:info@web3convention.com">info@web3convention.com</a>
					</ContentText>
					<ContentText>
						Partnership:{' '}
						<a href="mailto:business@web3convention.com">business@web3convention.com</a>
					</ContentText>
				</Grid>
				<Grid item mobile={12} tablet={6} laptop={6} largeLaptop={1.5}>
					<Title>Our Events</Title>
					<div className="flex flex-col">
						{eventsConfig.map(linkConfig => (
							<StyledLink href={linkConfig.path} key={linkConfig.label}>
								{linkConfig.label}
							</StyledLink>
						))}
					</div>
				</Grid>
				<Grid item mobile={12} tablet={6} laptop={6} largeLaptop={1.5}>
					<Title>Partners</Title>
					<div className="flex flex-col">
						{partnersConfig.map(linkConfig => (
							<StyledLink href={linkConfig.path} key={linkConfig.label}>
								{linkConfig.label}
							</StyledLink>
						))}
					</div>
				</Grid>
				<Grid item mobile={12} tablet={6} laptop={6} largeLaptop={1.5}>
					<Title>Useful Links</Title>
					<div className="flex flex-col">
						{linkConfigList.map(linkConfig => (
							<StyledLink href={linkConfig.path} key={linkConfig.label}>
								{linkConfig.label}
							</StyledLink>
						))}
					</div>
				</Grid>
				<Grid item mobile={12} tablet={6} laptop={4} largeLaptop={2.4}>
					<Grid container spacing={3}>
						{qrCodes.map(qrCode => (
							<QRcodeGridItem
								item
								mobile={4}
								tablet={4}
								laptop={4}
								largeLaptop={4}
								key={qrCode._id}
							>
								<Link href={qrCode.link} target="_blank">
									<Image
										loader={imageLoader}
										src={qrCode.src}
										alt={qrCode.alt}
										width={74}
										height={74}
										unoptimized
									/>
								</Link>
								{qrCode.alt}
							</QRcodeGridItem>
						))}
					</Grid>
				</Grid>
			</ContainerGrid>
			<SubscriptionModal message={message} open={openModal} handleClose={handleClose} />
			<DisclaimerWrapper>
				<DisclaimerTitle>Disclaimer</DisclaimerTitle>
				<DisclaimerContentWrapper>
					<FlagImage>
						<img src={countryImage} alt="countryImage" />
					</FlagImage>
					<FlagImage>
						<img src={secondCountryImage} alt="secondCountryImage" />
					</FlagImage>
					<DisclaimerContent>
						AI + Web3 Convention acknowledges Traditional Owners of Country throughout
						Australia and recognises the continuing connection to lands, waters and
						communities. We pay our respect to Aboriginal and Torres Strait Islander
						cultures; and to Elders past and present. Aboriginal and Torres Strait
						Islander peoples should be aware that this website may contain images or
						names of people who have since passed away.
					</DisclaimerContent>
				</DisclaimerContentWrapper>
			</DisclaimerWrapper>
		</ContentContainer>
	);
};

export default FooterContent;
