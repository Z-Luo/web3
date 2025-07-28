import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { isEmpty } from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import SubMenu from './components/SubMenu';
import ENavItem from '@/constants/nav';
import { navItemsConfig, subNavItemsConfig } from '@/layouts/Header/navBarConfig';
import { activeNavBarTitleDecoration, navBarTitleDecoration } from '@/styles/mixin';
import { color, headerHeight } from '@/styles/variables';

const { whiteColor } = color;

interface INavButtonContainerProps {
	active: boolean;
}
const NavContainer = styled.nav``;

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
	<Tooltip {...props} classes={{ popper: className }} />
))({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: whiteColor,
		borderRadius: 0,
		transform: 'translateY(-35px) !important',
		position: 'relative',
		padding: '0',
		'&::before': {
			content: '""',
			position: 'absolute',
			top: '-8px',
			left: 'calc(50% - 8px)',
			width: '6px',
			height: '12px',
			backgroundColor: whiteColor,
			clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
		}
	}
});

const StyledButton = styled.button`
	background-color: transparent;
	border: none;
	color: ${whiteColor};
	cursor: pointer;
	font-family: Arial-BoldMT;
	font-size: 14px;
	font-weight: 600;
	height: ${headerHeight};
	letter-spacing: normal;
	padding: 0 19px;
`;

const NavButtonContainer = styled.div<INavButtonContainerProps>`
	display: inline-block;
	span:before {
		${({ active }) => (active ? activeNavBarTitleDecoration() : null)}
	}
	&:hover span:before {
		${activeNavBarTitleDecoration()}
	}
`;

const ButtonCtx = styled.span`
	color: ${whiteColor};
	text-transform: uppercase;
	${navBarTitleDecoration('calc(100% + 8px)', 'calc(50% - 2px)', '-4px')};
`;

const NavMenu: React.FC = () => {
	const router = useRouter();
	const pathKey = router.pathname.split('/');

	const renderNavItem = (navItem: ENavItem) => (
		<NavButtonContainer active={navItem === pathKey[1]}>
			<StyledButton>
				<ButtonCtx>{navItemsConfig[navItem].title}</ButtonCtx>
			</StyledButton>
		</NavButtonContainer>
	);

	return (
		<NavContainer>
			{Object.values(ENavItem).map(navItem => {
				const subNavItemConfig = subNavItemsConfig[navItem] || [];
				return !isEmpty(subNavItemConfig) ? (
					<CustomWidthTooltip
						title={<SubMenu subNavList={subNavItemConfig} />}
						key={navItem}
					>
						{renderNavItem(navItem)}
					</CustomWidthTooltip>
				) : (
					<Link href={navItemsConfig[navItem].path} key={navItem}>
						{renderNavItem(navItem)}
					</Link>
				);
			})}
		</NavContainer>
	);
};

export default NavMenu;
