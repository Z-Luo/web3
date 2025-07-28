import dayjs from 'dayjs';
import { upperFirst } from 'lodash';
import Link from 'next/link';
import styled from 'styled-components';

import { IEvent } from '@/interfaces/event';
import { tagDecoration } from '@/styles/mixin';
import { color } from '@/styles/variables';

const { darkPrimaryColor, whiteColor } = color;

interface EventCellProps {
	event: IEvent;
}

const EventContainer = styled.div`
	font-size: 13px;
	&:hover {
		div {
			opacity: 1;
			top: -40px;
			transition: opacity 0.5s ease-in-out;
		}
		div:last-child {
			top: 7px;
		}
	}
`;
const EventTitle = styled.h4`
	font-size: 16px;
	margin: 0;
`;

const EventTime = styled.p`
	margin: 6px 0;
`;
const EventHost = styled.p`
	color: ${darkPrimaryColor};
	font-style: italic;
	${tagDecoration()};
	margin: 0;
`;

const EventTooltip = styled.div`
	background-color: ${darkPrimaryColor};
	color: ${whiteColor};
	${tagDecoration()};
	font-size: 16px;
	left: 50%;
	opacity: 0;
	padding: 12px 8px;
	position: absolute;
	top: 0;
	transform: translateX(-50%);
	width: fit-content;
`;

const EventTooltipArrow = styled.div`
	border-color: ${darkPrimaryColor} transparent;
	border-style: solid;
	border-width: 8px 8px 0;
	content: '';
	display: inline;
	left: 50%;
	opacity: 0;
	position: absolute;
	top: 0;
	transform: translateX(-50%);
`;

const EventCell: React.FC<EventCellProps> = ({ event }) => (
	<Link href="/comingSoon">
		<EventContainer>
			<EventTitle>{event.title}</EventTitle>
			<EventTime>
				{dayjs(event.start).format('HH.mm')} - {dayjs(event.end).format('HH.mm')}
			</EventTime>
			<EventHost>{event.host}</EventHost>
			<EventTooltip>{upperFirst(event.eventType)}</EventTooltip>
			<EventTooltipArrow />
		</EventContainer>
	</Link>
);

export default EventCell;
