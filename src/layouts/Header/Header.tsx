import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import HeaderLogo from '../HeaderLogo';

import DropDownMenu from './components/DropDownMenu';
import DropDownMenuButton from './components/DropDownMenuButton';
import NavMenu from './components/NavMenu';
import NavRightSection from './components/NavRightSection';
import { devices } from '@/styles/variables';

const HeaderContainer = styled.div<{ isScrolled: boolean }>`
	align-items: center;
	background-color: ${({ isScrolled }) => (isScrolled ? 'rgba(0, 0, 0, 0.88)' : 'transparent')};
	display: flex;
	justify-content: space-between;
	opacity: 1;
	padding: 18px 24px;
	position: ${({ isScrolled }) => (isScrolled ? 'fixed' : 'relative')};
	top: 0;
	transition: background-color 0.3s ease, top 0.3s ease;
	width: 100%;
	z-index: 2;
	@media ${devices.laptop} {
		padding: 0 40px;
	}
`;

const NavBar = styled.div`
	display: none;
	@media ${devices.laptop} {
		display: flex;
	}
`;

const DropDownNav = styled.div`
	@media ${devices.laptop} {
		display: none;
	}
`;

const Header = () => {
	const [openDropdownMenu, setOpenDropdownMenu] = useState<boolean>(false);
	const [logoSrc, setLogoSrc] = useState<string>('/web3-logo-white.svg');
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		setLogoSrc(openDropdownMenu ? '/web3-logo.svg' : '/web3-logo-white.svg');
	}, [openDropdownMenu]);

	const handleScroll = useCallback(() => {
		setIsScrolled(window.scrollY > 10);
	}, []);
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isScrolled]);

	return (
		<HeaderContainer isScrolled={isScrolled}>
			<HeaderLogo logoSrc={logoSrc} />
			<NavBar className="items-center">
				<NavMenu />
				<NavRightSection />
			</NavBar>
			<DropDownNav>
				<DropDownMenuButton handleClick={() => setOpenDropdownMenu(!openDropdownMenu)} />
			</DropDownNav>
			<DropDownMenu showMenu={openDropdownMenu} closeMenu={setOpenDropdownMenu} />
		</HeaderContainer>
	);
};

export default Header;
