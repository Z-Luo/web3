// import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
// import Badge from '@mui/material/Badge';
// import styled from 'styled-components';

import NavDrawer from './components/NavDrawer';
// import { color } from '@/styles/variables';

// const { primaryColor, whiteColor } = color;

// const NavIconButton = styled.button`
// 	background-color: transparent;
// 	border: none;
// 	color: ${whiteColor};
// 	cursor: pointer;
// 	margin: 0 6px;
// 	min-width: unset;
// 	&:hover {
// 		color: ${primaryColor};
// 	}
// `;

// const StyledBadge = styled(Badge)({
// 	'& .MuiBadge-badge': {
// 		borderRadius: '7px',
// 		fontSize: '10px',
// 		minWidth: '14px',
// 		height: '14px',
// 		fontWeight: 600
// 	}
// });

const NavRightSection: React.FC = () => {
	return (
		<>
			{/* <NavIconButton>
				<SearchIcon fontSize="small" />
			</NavIconButton>
			<NavIconButton>
				<ConfirmationNumberOutlinedIcon fontSize="small" />
			</NavIconButton> */}
			{/* <NavIconButton>
				<StyledBadge badgeContent={0} color="primary" showZero>
					<ShoppingBagOutlinedIcon fontSize="small" />
				</StyledBadge>
			</NavIconButton> */}
			<NavDrawer />
		</>
	);
};

export default NavRightSection;
