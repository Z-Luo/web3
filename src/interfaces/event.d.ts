import { EEventType } from '@/constants/event';

interface IEvent {
	_id: string;
	eventType: EEventType;
	start: string;
	end: string;
	duration: string;
	title: string;
	host: string;
}
