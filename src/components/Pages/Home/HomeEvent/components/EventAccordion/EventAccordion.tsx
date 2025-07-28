import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import dayjs from 'dayjs';
import { compact, isEmpty, uniqBy } from 'lodash';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

import getFilteredEventConfig from '../../utils/getFilteredEventConfig';

import { EEventType, WEEKDAY } from '@/constants/event';
import { IEvent } from '@/interfaces/event';

interface EventAccordionProps {
	list: IEvent[];
	currentFilterType: EEventType | undefined;
}

const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))`
	&::before {
		display: none;
	}
`;

const AccordionSummary = styled(MuiAccordionSummary)`
	font-size: 13px;
	font-weight: 600;
	padding: 0;
	text-transform: uppercase;
	.MuiAccordionSummary-content {
		margin: 0;
	}
	.MuiAccordionSummary-expandIconWrapper {
		transform: rotate(180deg);
	}
	.MuiAccordionSummary-expandIconWrapper.Mui-expanded {
		transform: rotate(180deg);
	}
`;

const AccordionDetails = styled(MuiAccordionDetails)`
	font-size: 12px;
	padding: 0;
`;

const EventContainer = styled.div`
	border-bottom: 1px solid #e0e0e0;
	display: flex;
	font-size: 13px;
	justify-content: space-between;
	margin-top: 8px;
`;
const EventTitle = styled.p`
	margin: 0;
`;

const EventTime = styled.p`
	margin: 6px 0;
`;

const EventAccordion: React.FC<EventAccordionProps> = ({ list, currentFilterType }) => {
	const { dataByRow, weekdayColumns: weekdayList } = getFilteredEventConfig(
		list,
		currentFilterType
	);
	const [openKeyList, setOpenKeyList] = useState<string[]>([]);

	const handleClickWeekday = (weekdayKey: string) => {
		setOpenKeyList(prevState =>
			prevState.includes(weekdayKey)
				? prevState.filter(item => item !== weekdayKey)
				: [...prevState, weekdayKey]
		);
	};

	return (
		<div>
			{weekdayList.map((weekday, index) => {
				// filter out any weekdays without any events
				if (isEmpty(compact(dataByRow.map(data => data[index])))) return null;
				const weekdayKey = dayjs(weekday).day().toString();
				const open = openKeyList.includes(weekdayKey);
				return (
					<Accordion
						expanded={open}
						onChange={() => handleClickWeekday(weekdayKey)}
						key={weekdayKey}
					>
						<AccordionSummary
							aria-controls={weekdayKey}
							expandIcon={
								open ? (
									<RemoveIcon fontSize="small" />
								) : (
									<AddIcon fontSize="small" />
								)
							}
						>
							<p>
								{WEEKDAY[+weekdayKey]} ({dayjs(weekday).format('DD MMM')})
							</p>
						</AccordionSummary>
						<AccordionDetails>
							{uniqBy(
								dataByRow.map(rowData => rowData[index]),
								'_id'
							).map(
								event =>
									event && (
										<Link href="/comingSoon" key={event._id}>
											<EventContainer>
												<EventTitle>{event.title}</EventTitle>
												<EventTime>
													{dayjs(event.start).format('HH.mm')} -{' '}
													{dayjs(event.end).format('HH.mm')}
												</EventTime>
											</EventContainer>
										</Link>
									)
							)}
						</AccordionDetails>
					</Accordion>
				);
			})}
		</div>
	);
};

export default EventAccordion;
