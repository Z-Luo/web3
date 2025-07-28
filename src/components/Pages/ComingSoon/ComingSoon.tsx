import { useState } from 'react';
import styled from 'styled-components';

import ComingSoonModal from './components/ComingSoonModal';
import Countdown from '@/components/Shares/Countdown';
import DropDownMenuButton from '@/layouts/Header/components/DropDownMenuButton';
import HeaderLogo from '@/layouts/HeaderLogo';
import { tagDecoration } from '@/styles/mixin';
import { EDeviceSize, color, devices } from '@/styles/variables';

const { primaryColor, whiteColor } = color;

const ComingSoonContainer = styled.div`
	background-image: url('/images/demo/coming-soon-overlay.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	color: ${whiteColor};
	height: 100vh;
`;

const Header = styled.div`
	padding: 30px 20px;
	@media ${devices.tablet} {
		padding: 30px 50px;
	}
`;

const DropDownButton = styled.div`
	button {
		color: black;
		&:hover {
			color: ${primaryColor};
		}
	}
`;

const Content = styled.div`
	margin: 0 30px;
	padding-bottom: 100px;
	@media ${devices.mobile} {
		margin: 0 30px;
		padding-bottom: 100px;
	}
	@media ${devices.tablet} {
		margin: 0 60px;
		padding-bottom: 100px;
	}
	@media ${devices.laptop} {
		margin: 0 120px;
		padding-bottom: 100px;
	}
`;

const Subtitle = styled.h2`
	font-size: 16px;
	font-style: italic;
	font-weight: normal;
	${tagDecoration()};
	letter-spacing: 0.1em;
	margin: 0;
	@media ${devices.tablet} {
		font-size: 18px;
	}
`;

const Title = styled.h1`
	font-size: 46px;
	font-weight: 700;
	margin: 0;
	margin-bottom: 20px;
	@media ${devices.tablet} {
		font-size: 66px;
	}
`;

const ComingSoon: React.FC = () => {
	const [open, setOpen] = useState<boolean>(false);

	const onClose = () => setOpen(false);
	return (
		<ComingSoonContainer className="flex flex-col">
			<Header className="flex justify-between item-center">
				<HeaderLogo logoSrc="/web3-logo-white.svg" />
				<DropDownButton>
					<DropDownMenuButton handleClick={() => setOpen(true)} />
				</DropDownButton>
			</Header>
			<Content className="flex flex-col justify-center flex-1">
				<Subtitle>Brisbane, 18-19 May, 2024</Subtitle>
				<Title>Opening soon</Title>
				<Countdown
					NumberFontSizeConfig={{
						[EDeviceSize.miniMobile]: 40,
						[EDeviceSize.mobile]: 50
					}}
					countdownDate="2024-05-17T14:00:00.000Z"
				/>
			</Content>
			<ComingSoonModal open={open} onClose={onClose} />
		</ComingSoonContainer>
	);
};

export default ComingSoon;
