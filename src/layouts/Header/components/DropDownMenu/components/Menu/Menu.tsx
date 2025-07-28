import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';
import { SetStateAction } from 'react';
import styled from 'styled-components';

import ENavItem from '@/constants/nav';
import { navItemsConfig, subNavItemsConfig } from '@/layouts/Header/navBarConfig';
import { activeNavBarTitleDecoration, navBarTitleDecoration } from '@/styles/mixin';
import { devices } from '@/styles/variables';

interface MenuProps {
	navItem: ENavItem;
	openKey: ENavItem | undefined;
	setOpenKey: React.Dispatch<SetStateAction<ENavItem | undefined>>;
}

interface NavItemProps {
	isActive: boolean;
}

const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))`
	margin: 0 20px;
	@media ${devices.mobile} {
		margin: 0 60px;
	}
	@media ${devices.tablet} {
		margin: 0 100px;
	}
	&::before {
		display: none;
	}
`;

const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary {...props} />
))`
	border-bottom: 1px solid #edeff2;
	font-family: Arial-BoldMT;
	font-size: 20px;
	font-weight: 600;
	line-height: 30px;
	padding: 0 4px;
	text-transform: uppercase;
	.Mui-expanded {
		min-height: unset;
	}
	.MuiAccordionSummary-content {
		margin: 0;
		p {
			${navBarTitleDecoration('calc(100% + 8px)', '50%', '-4px')};
		}
		&:hover p::before {
			${activeNavBarTitleDecoration()};
		}
	}
	.MuiAccordionSummary-expandIconWrapper {
		transform: rotate(-90deg);
	}
	.MuiAccordionSummary-expandIconWrapper.Mui-expanded {
		transform: rotate(0);
	}
`;

const AccordionDetails = styled(MuiAccordionDetails)`
	margin-left: 10px;
	padding: 0;
`;

const SubNavItem = styled.div<NavItemProps>`
	border-bottom: 1px solid #edeff2;
	font-size: 15px;
	font-weight: 600;
	p {
		margin: 12px 0;
		padding: 0;
		width: fit-content;
		${navBarTitleDecoration('calc(100% + 8px)', '50%', '-4px')};
		&:before {
			${({ isActive }) => (isActive ? activeNavBarTitleDecoration() : null)}
		}
	}
	&:hover p::before {
		${activeNavBarTitleDecoration()}
	}
`;

const Menu: React.FC<MenuProps> = ({ navItem, openKey, setOpenKey }) => {
	const router = useRouter();
	const expanded = openKey === navItem;
	const subItemConfig = subNavItemsConfig[navItem] || [];

	const handleClickNavItem = () => {
		if (isEmpty(subItemConfig)) {
			router.push(navItemsConfig[navItem].path);
		} else {
			setOpenKey(expanded ? undefined : navItem);
		}
	};

	return (
		<Accordion expanded={expanded} onChange={handleClickNavItem} key={navItem}>
			<AccordionSummary
				aria-controls={navItem}
				expandIcon={!isEmpty(subItemConfig) ? <ExpandMoreIcon fontSize="small" /> : null}
			>
				<p>{navItemsConfig[navItem].title}</p>
			</AccordionSummary>
			<AccordionDetails>
				{subItemConfig.map(subNavItem => (
					<SubNavItem
						isActive={router.pathname === subNavItem.path}
						className="cursor-pointer"
						key={subNavItem.title}
						onClick={() => router.push(subNavItem.path)}
					>
						<p>{subNavItem.title}</p>
					</SubNavItem>
				))}
			</AccordionDetails>
		</Accordion>
	);
};

export default Menu;
