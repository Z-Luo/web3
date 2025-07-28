import Close from '@mui/icons-material/Close';
import Fade from '@mui/material/Fade';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Menu from './components/Menu';
import ENavItem from '@/constants/nav';
import HeaderLogo from '@/layouts/HeaderLogo';
import { color, devices } from '@/styles/variables';

const { whiteColor } = color;

interface DropDownMenuProps {
	showMenu: boolean;
	closeMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuContainer = styled.div`
	background-color: ${whiteColor};
	bottom: 0;
	flex-grow: 1;
	height: calc(100vh - 16px);
	left: 0;
	margin: 8px;
	overflow-y: scroll;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 3;
	@media ${devices.laptop} {
		display: none;
	}
`;

const DrawerHeader = styled.div`
	align-items: center;
	display: flex;
	height: 64px;
	justify-content: space-between;
	padding: 0 12px 0 16px;
	@media ${devices.laptop} {
		display: none;
	}
`;

const CloseIcon = styled(Close)`
	background-color: transparent;
	border: none;
	cursor: pointer;
	height: 27px;
	width: 27px;
`;

const StyledFade = styled(Fade)`
	::-webkit-scrollbar {
		width: 0 !important;
	}
`;

const DropDownMenu: React.FC<DropDownMenuProps> = ({ showMenu, closeMenu }) => {
	const [openKey, setOpenKey] = useState<ENavItem | undefined>();

	useEffect(() => {
		if (showMenu) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [showMenu]);

	return (
		<StyledFade in={showMenu}>
			<MenuContainer>
				<DrawerHeader>
					<HeaderLogo logoSrc="/web3-logo.svg" />
					<CloseIcon onClick={() => closeMenu(false)}>X</CloseIcon>
				</DrawerHeader>
				{Object.values(ENavItem).map(navItem => (
					<Menu
						navItem={navItem}
						openKey={openKey}
						setOpenKey={setOpenKey}
						key={navItem}
					/>
				))}
			</MenuContainer>
		</StyledFade>
	);
};

export default DropDownMenu;
