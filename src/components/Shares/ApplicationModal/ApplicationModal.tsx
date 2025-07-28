import { Box, Modal, Typography } from '@mui/material';

import { color } from '@/styles/variables';

const { warningColor, textColor } = color;

interface IMessage {
	[key: string]: {
		title: string;
		description: string;
		color: string;
	};
}

interface ApplicationModalProps {
	message?: string;
	open: boolean;
	handleClose: () => void;
}

const style = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 320,
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4
};

const messageType: IMessage = {
	success: {
		title: 'Thank You!',
		description: 'Your Application has been accepted!',
		color: textColor
	},
	error: {
		title: 'Error!',
		description:
			'Sorry, there seems to be an error with your application. Please fill in all the required fields.',
		color: warningColor
	}
};
const SuccessApplication: React.FC<ApplicationModalProps> = ({ message, open, handleClose }) => {
	return message ? (
		<Modal open={open} onClose={handleClose}>
			<Box sx={style}>
				<Typography variant="h6" component="h2" color={messageType[message].color}>
					{messageType[message].title}
				</Typography>
				<Typography sx={{ mt: 2 }} color={messageType[message].color}>
					{messageType[message].description}
				</Typography>
			</Box>
		</Modal>
	) : null;
};

export default SuccessApplication;
