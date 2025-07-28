import CloseIcon from '@mui/icons-material/Close';
import { Dialog } from '@mui/material';
import Link from 'next/link';
import styled from 'styled-components';

import CopyRight from '@/layouts/Footer/components/CopyRight';
import HeaderLogo from '@/layouts/HeaderLogo';
import { tagDecoration } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';

const { blackColor, primaryColor, whiteColor } = color;

interface ComingSoonModalProps {
	open: boolean;
	onClose: () => void;
}

const ModalContent = styled.div`
	background-color: ${blackColor};
	color: ${whiteColor};
	min-height: 100vh;
	width: 100vw;
	@media ${devices.tablet} {
		height: 100vh;
	}
`;

const Head = styled.div`
	padding: 30px 20px;
	@media ${devices.tablet} {
		padding: 30px 50px;
	}
`;

const Body = styled.div`
	flex: 1;
	margin: 100px 50px;
	@media ${devices.tablet} {
		margin: 100px;
	}
`;

const Subtitle = styled.h3`
	color: ${primaryColor};
	font-size: 14px;
	font-style: italic;
	${tagDecoration()};
	font-weight: normal;
	letter-spacing: 0.1em;
	margin: 0;
	@media ${devices.tablet} {
		font-size: 16px;
	}
`;

const Title = styled.h2`
	font-size: 40px;
	font-weight: 700;
	margin: 0;
	margin-bottom: 5px;
	@media ${devices.tablet} {
		font-size: 50px;
	}
`;

const CloseButton = styled.div`
	position: absolute;
	right: 50px;
	top: 40px;
	svg {
		color: ${whiteColor};
	}
`;

const LinkNav = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 50px;
	max-width: 800px;
	width: fit-content;
`;

const StyledLink = styled(Link)`
	font-size: 20px;
	font-weight: 700;
	line-height: 3;
	max-width: 200px;
	width: 200px;
`;

const linkList = [
	{
		text: 'Conference Home',
		href: '/'
	}
];

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ open, onClose }) => {
	return (
		<Dialog open={open} onClose={onClose} fullScreen>
			<ModalContent className="flex flex-col">
				<Head>
					<CloseButton className="cursor-pointer" onClick={onClose}>
						<CloseIcon color="primary" fontSize="small" />
					</CloseButton>
					<HeaderLogo logoSrc="/web3-logo-white.svg" />
				</Head>
				<Body>
					<Subtitle>Good_things_happen</Subtitle>
					<Title>Welcome to AI + Web3 Convention</Title>
					<LinkNav>
						{linkList.map(({ text, href }) => (
							<StyledLink href={href} key={text}>
								{text}
							</StyledLink>
						))}
					</LinkNav>
				</Body>
				<CopyRight />
			</ModalContent>
		</Dialog>
	);
};

export default ComingSoonModal;
