import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

import { tagDecoration } from '@/styles/mixin';
import { color } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { primaryColor, textColor, whiteColor } = color;

const DrawerButton = styled.button`
	-moz-transition: all 0.5s;
	-webkit-transition: all 0.5s;
	background-color: ${whiteColor};
	border: none;
	border-radius: 0;
	color: ${textColor};
	cursor: pointer;
	height: fit-content;
	margin-left: 18px;
	min-width: unset;
	padding: 12px;
	transition: all 0.5s;
	&:hover {
		box-shadow: 1px 1px 8px 0 rgb(80 214 174 / 63);
	}
`;

const DrawerContainer = styled.div`
	background-color: ${textColor};
	color: ${whiteColor};
	height: 100%;
	padding: 75px 50px 36px;
	position: relative;
	width: 400px;
`;

const CloseButton = styled.div`
	position: absolute;
	right: 50px;
	top: 40px;
`;

const Tagline = styled.p`
	${tagDecoration()};
	color: ${primaryColor};
	font-style: italic;
	margin-bottom: 0;
`;

const Title = styled.h4`
	font-size: 25px;
	font-weight: 700;
	margin-top: 0;
`;

const StyledLink = styled(Link)`
	-moz-transition: color 0.4s ease-out;
	-webkit-transition: color 0.4s ease-out;
	padding: 6px 0;
	transition: color 0.4s ease-out;
	&:hover {
		color: ${primaryColor};
	}
`;

const ImageContainer = styled.div`
	cursor: pointer;
`;

const linkConfigList = [
	{
		label: 'Book Ticket',
		href: 'https://w3con.eventsair.com/web3convention/registration/Site/Register'
	},
	{
		label: 'Partner with Us',
		href: '/partners'
	},
	{
		label: 'Sign Up for the Competition',
		href: 'https://build.bewater.xyz/en/campaigns/rK6E-AI-Web3-Convention--Startup-Competition'
	},
	{
		label: 'Apply to Volunteer',
		href: 'https://w3con.eventsair.com/web3convention/atv'
	}
];

const NavDrawer: React.FC = () => {
	const router = useRouter();

	const [drawerStatus, setDrawerStatus] = useState<boolean>(false);

	const open = () => setDrawerStatus(true);
	const close = () => setDrawerStatus(false);

	return (
		<>
			<DrawerButton onClick={open}>
				<MenuIcon fontSize="small" />
			</DrawerButton>
			<SwipeableDrawer anchor="right" open={drawerStatus} onClose={close} onOpen={open}>
				<DrawerContainer>
					<CloseButton className="cursor-pointer" onClick={close}>
						<CloseIcon color="primary" fontSize="small" />
					</CloseButton>
					<ImageContainer onClick={() => router.push('/')}>
						<Image
							loader={imageLoader}
							unoptimized
							src="/web3-logo-white.svg"
							alt="logo"
							width={140}
							height={40}
							priority
						/>
					</ImageContainer>
					<Tagline>{`Don't_miss`}</Tagline>
					<Title>AI + Web3 Convention</Title>
					<p className="leading-relaxed">
						AI + Web3 Convention is the technology convention that brings together
						people and companies redefining the global tech industry.
					</p>
					<div className="flex flex-col">
						{linkConfigList.map(({ label, href }) => (
							<StyledLink href={href} key={label}>
								{label}
							</StyledLink>
						))}
					</div>
				</DrawerContainer>
			</SwipeableDrawer>
		</>
	);
};

export default NavDrawer;
