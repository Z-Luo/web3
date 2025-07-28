import Grid from '@mui/material/Unstable_Grid2';
import Link from 'next/link';
import styled from 'styled-components';

import { color, devices, sizes } from '@/styles/variables';

const { textColor } = color;

interface GridItemProps {
	bgColor: string;
}

interface AgendaTableProps {
	headConfig?: IAgendaHead[];
	agendaConfig?: IAgendaConfig[];
}

const AgendaTableContainer = styled.div`
	margin: 50px auto;
	max-width: ${`${sizes.laptop}px`};
	position: relative;
`;
const TableHead = styled(Grid)`
	margin-bottom: 20px;
`;

const TableHeadItem = styled(Grid)`
	position: relative;
	text-align: center;
	&:not(:last-child) {
		&::after {
			background-color: #cacaca;
			content: '';
			height: 40px;
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-36%);
			width: 2px;
		}
	}
`;

const HeadTitle = styled.p`
	font-size: 20px;
	font-weight: 700;
	margin: 0;
	@media ${devices.mobile} {
		font-size: 22px;
	}
	@media ${devices.laptop} {
		font-size: 26px;
	}
`;

const HeadSubtitle = styled.p`
	font-size: 16px;
	font-weight: bold;
	margin: 0;
`;

const GridItemContainer = styled(Grid)`
	@media ${devices.mobile} {
		height: 60px;
	}
`;

const GridItem = styled.div<GridItemProps>`
	background-color: ${({ bgColor }) => bgColor};
	color: ${textColor};
	flex: 1;
	font-size: 13px;
	font-weight: 600;
	height: 100%;
	padding: 10px 4px;
	text-align: center;
	p {
		margin: 0;
	}
	@media ${devices.mobile} {
		font-size: 13px;
	}
	@media ${devices.laptop} {
		font-size: 16px;
	}
`;

const itemColors = ['#d19de7', '#6aeef2', '#bcbff5', '#f4cad4', '#8af9d5'];

const AgendaTable: React.FC<AgendaTableProps> = ({ headConfig = [], agendaConfig = [] }) => {
	return (
		<AgendaTableContainer>
			<TableHead container columnSpacing={1}>
				{headConfig.map(({ title, subtitle }) => (
					<TableHeadItem key={title} miniMobile={4}>
						<HeadSubtitle>{subtitle}</HeadSubtitle>
						<HeadTitle>{title}</HeadTitle>
					</TableHeadItem>
				))}
			</TableHead>
			<Grid container rowSpacing={1} columnSpacing={1}>
				{agendaConfig.map(({ _id, title, columns, offset = 0 }, index) => (
					<GridItemContainer
						key={_id}
						miniMobile={columns * 4}
						miniMobileOffset={offset * 4}
					>
						<Link href="/comingSoon">
							<GridItem
								bgColor={itemColors[index % 5]}
								className="flex items-center justify-center"
							>
								<p>{title}</p>
							</GridItem>
						</Link>
					</GridItemContainer>
				))}
			</Grid>
		</AgendaTableContainer>
	);
};

export default AgendaTable;
