type TMessageType = 'success' | 'error' | 'info';

interface IMessage {
	type: TMessageType;
	message: string;
}
