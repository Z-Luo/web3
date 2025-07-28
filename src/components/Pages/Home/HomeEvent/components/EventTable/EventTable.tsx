import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import dayjs from 'dayjs';
import styled from 'styled-components';

import getFilteredEventConfig from '../../utils/getFilteredEventConfig';
import EventCell from '../EventCell';

import { EEventType, WEEKDAY } from '@/constants/event';
import { IEvent } from '@/interfaces/event';
import { color } from '@/styles/variables';

const { whiteColor } = color;

interface EventTableProps {
	list: IEvent[];
	currentFilterType: EEventType | undefined;
}

const StyledTableContainer = styled(TableContainer)`
	background-color: ${whiteColor};
	border: 2px dashed #e5e5e5;
	box-shadow: unset;
	margin: 0 auto;
	position: relative;
	width: fit-content;
`;

const StyledHeadTableRow = styled(TableRow)`
	border: unset;
	border-bottom: 2px dashed #e5e5e5;
`;

const StyledHeadTableCell = styled(TableCell)`
	border: unset;
	font-size: 16px;
	font-weight: 700;
	&:not(:last-child) {
		border-right: 1px dashed #e5e5e5;
	}
`;

const StyledTableRow = styled(TableRow)`
	&:not(:last-child) {
		border-bottom: 1px dashed #e5e5e5;
	}
`;

const StyleLeftTableCell = styled(TableCell)`
	border: unset;
	font-size: 16px;
	font-weight: 700;
	padding: 0 24px;
	&:not(:last-child) {
		border-right: 1px dashed #e5e5e5;
	}
`;

const StyledTableCell = styled(TableCell)`
	border: unset;
	height: 130px;
	max-width: 230px;
	padding: 30px 20px;
	position: relative; // for hover tooltips
	width: 13vw;
	&:not(:last-child) {
		border-right: 1px dashed #e5e5e5;
	}
`;

const EventTable: React.FC<EventTableProps> = ({ list, currentFilterType }) => {
	const { dataByRow, weekdayColumns, rows } = getFilteredEventConfig(list, currentFilterType);

	return (
		<StyledTableContainer>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<StyledHeadTableRow>
						<StyledHeadTableCell />
						{weekdayColumns.map(cell => {
							return (
								<StyledHeadTableCell key={dayjs(cell).day()}>
									{WEEKDAY[dayjs(cell).day()]} ({dayjs(cell).format('DD MMM')})
								</StyledHeadTableCell>
							);
						})}
					</StyledHeadTableRow>
				</TableHead>
				<TableBody>
					{dataByRow.map((row, index) => (
						<StyledTableRow key={rows[index]}>
							<StyleLeftTableCell component="th" scope="row">
								{rows[index]}.00
							</StyleLeftTableCell>
							{row.map((event, columnIndex) => (
								<StyledTableCell
									key={event ? event._id : `${rows[index]}_${columnIndex}`}
								>
									{event && <EventCell event={event} />}
								</StyledTableCell>
							))}
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</StyledTableContainer>
	);
};

export default EventTable;
