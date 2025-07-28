import dayjs, { Dayjs } from 'dayjs';
import { last, sortBy, uniq } from 'lodash';

import { EEventType } from '@/constants/event';
import { IEvent } from '@/interfaces/event';

interface IGetFilterEventConfig {
	dataByRow: Array<Array<IEvent | undefined>>;
	rows: number[]; // hours in rows
	weekdayColumns: Dayjs[];
}

const getFilteredEventConfig = (
	list: IEvent[],
	currentFilterType: EEventType | undefined
): IGetFilterEventConfig => {
	const sortedEventList = sortBy(list, 'start');
	const filteredList = list.filter(
		event => !currentFilterType || event.eventType === currentFilterType
	);
	// Column
	const weekdayIndexColumns = Array.from(Array(7), (_, index) => index).filter(weekDayIndex => {
		const firstWeekDay = dayjs(sortedEventList[0].start).get('day');
		const lastWeekDay =
			sortedEventList.length > 1
				? dayjs(last(sortedEventList)?.start).get('day')
				: firstWeekDay;
		return weekDayIndex >= firstWeekDay && weekDayIndex <= lastWeekDay;
	});
	// Row
	const rows = sortBy(
		uniq(
			list
				.map(event => {
					const eventStartHour = dayjs(event.start).get('hour');
					const hourDuration = dayjs(event.end).diff(dayjs(event.start), 'h');
					if (hourDuration < 2) {
						return [eventStartHour];
					}
					return Array.from(Array(hourDuration), (_, index) => index + eventStartHour);
				})
				.flat()
		)
	);
	// Combined data arrays for each row
	const dataByRow = rows.map(hour =>
		weekdayIndexColumns.map(weekdayIndex =>
			filteredList.find(event => {
				const eventStartDay = dayjs(event.start).get('day');
				const eventStartHour = dayjs(event.start).get('hour');
				const endStartHour = dayjs(event.end).get('hour');
				return (
					eventStartDay === weekdayIndex && eventStartHour <= hour && endStartHour > hour
				);
			})
		)
	);

	return {
		dataByRow,
		rows,
		weekdayColumns: weekdayIndexColumns.map(weekdayIndex =>
			dayjs(sortedEventList[0].start).set('day', weekdayIndex)
		)
	};
};

export default getFilteredEventConfig;
