import styled from 'styled-components';

import NavBarButton from '../NavBarButton';

import { INavItem } from '@/interfaces/nav';

interface SubMenuProps {
	subNavList: INavItem[];
}

const SubMenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 214px;
	padding: 11px 0;
`;

const SubMenu: React.FC<SubMenuProps> = ({ subNavList }) => {
	return (
		<SubMenuContainer>
			{subNavList.map(subNavItem => (
				<NavBarButton
					buttonCtx={subNavItem.title}
					key={subNavItem.title}
					linkHref={subNavItem.path}
					icon={subNavItem.icon}
				/>
			))}
		</SubMenuContainer>
	);
};

export default SubMenu;
