import Grid from '@mui/material/Unstable_Grid2';
import styled from 'styled-components';

import { WEEKDAY } from '@/constants/event';
import { color, devices, sizes } from '@/styles/variables';

const { textColor } = color;

interface GridItemProps {
	bgColor: string;
}

const AgendaTableContainer = styled.div`
	max-width: ${`${sizes.desktop}px`};
	position: relative;
`;
const TableHead = styled(Grid)`
	margin-bottom: 16px;
`;

const TableHeadItem = styled(Grid)`
	position: relative;
	text-align: center;
	@media ${devices.desktop} {
		&:not(:last-child) {
			&::after {
				background-color: #cacaca;
				content: '';
				height: 38px;
				position: absolute;
				right: 0;
				top: 50%;
				transform: translateY(-36%);
				width: 1px;
			}
		}
	}
`;

const HeadTitle = styled.p`
	font-size: 20px;
	font-weight: 700;
	margin: 0;
	@media ${devices.miniMobile} {
		font-size: 16px;
	}
	@media ${devices.laptop} {
		font-size: 26px;
	}
	@media ${devices.desktop} {
		font-size: 30px;
	}
`;

const HeadSubtitle = styled.p`
	font-size: 16px;
	font-weight: bold;
	margin: 0;
	@media ${devices.miniMobile} {
		font-size: 14px;
	}
	@media ${devices.desktop} {
		font-size: 24px;
	}
`;

const GridItemContainer = styled(Grid)``;

const GridItem = styled.div<GridItemProps>`
	align-items: center;
	background-color: ${({ bgColor }) => bgColor};
	color: ${textColor};
	display: flex;
	height: 52px;
	justify-content: center;
	padding: 14px 0px;

	p {
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		display: -webkit-box;
		font-size: 12px;
		font-weight: 600;
		line-height: 16px;
		max-width: 100%;
		overflow: hidden;
		text-align: center;
		text-overflow: ellipsis;

		@media ${devices.mobile} {
			font-size: 13px;
		}
		@media ${devices.laptop} {
			line-height: 20px;
			font-size: 16px;
		}
	}
`;

const itemColors = ['#d19de7', '#6aeef2', '#bcbff5', '#f4cad4', '#8af9d5'];

const headConfig: {
	title: string;
	subtitle: string;
}[] = [
	{
		title: WEEKDAY[5],
		subtitle: '17 May'
	},
	{
		title: WEEKDAY[6],
		subtitle: '18 May'
	},
	{
		title: WEEKDAY[0],
		subtitle: '19 May'
	},
	{
		title: WEEKDAY[1],
		subtitle: '20 May'
	}
];

const agendaConfig = [
	{
		_id: '1-1',
		title: 'Side Events',
		columns: 1,
		offset: 0
	},
	{
		_id: '1-23',
		title: 'Keynote Speech',
		columns: 2,
		offset: 0
	},
	{
		_id: '1-4',
		title: 'Side Events',
		columns: 1,
		offset: 0
	},
	{
		_id: '2-1',
		title: 'Exhibitors Move in',
		columns: 1,
		offset: 0
	},

	{
		_id: '2-23',
		title: 'AI Insight Hub',
		columns: 2,
		offset: 0
	},
	{
		_id: '2-4',
		title: 'Networking',
		columns: 1,
		offset: 0
	},
	{
		_id: '3-1',
		title: 'Welcome Party (Invited Only)',
		columns: 1,
		offset: 0
	},
	{
		_id: '3-23',
		title: 'Web3 Innovation Hub',
		columns: 2,
		offset: 0
	},
	{
		_id: '4-23',
		title: 'FutureTech Hub',
		columns: 2,
		offset: 1
	},
	{
		_id: '5-23',
		title: 'NFT Gallery',
		columns: 2,
		offset: 1
	},
	{
		_id: '6-23',
		title: 'Sponsor/Startup Pitches',
		columns: 2,
		offset: 1
	},
	{
		_id: '7-23',
		title: 'Side Events',
		columns: 2,
		offset: 1
	},
	{
		_id: '8-2',
		title: 'VIP Party',
		columns: 1,
		offset: 1
	},
	{
		_id: '8-3',
		title: '',
		columns: 0,
		offset: 1
	},
	{
		_id: '9-2',
		title: 'Cyber Party',
		columns: 1,
		offset: 1
	}
];
const AgendaTable: React.FC = () => {
	return (
		<AgendaTableContainer>
			<TableHead container columnSpacing={1}>
				{headConfig.map(({ title, subtitle }) => (
					<TableHeadItem key={title} miniMobile={3}>
						<HeadSubtitle>{subtitle}</HeadSubtitle>
						<HeadTitle>{title}</HeadTitle>
					</TableHeadItem>
				))}
			</TableHead>
			<Grid container rowSpacing={1} columnSpacing={1}>
				{agendaConfig.map(({ _id, title, columns, offset = 0 }, index) => (
					<GridItemContainer
						key={_id}
						miniMobile={columns * 3}
						miniMobileOffset={offset * 3}
					>
						<GridItem bgColor={itemColors[index % 5]}>
							<p>{title}</p>
						</GridItem>
					</GridItemContainer>
				))}
			</Grid>
		</AgendaTableContainer>
	);
};

export default AgendaTable;
