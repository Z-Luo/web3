import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import styled from 'styled-components';

import ThemeButton from '../ThemeButton';

import { color, devices } from '@/styles/variables';

const { darkPrimaryColor, warningColor, InfoColor } = color;

interface SubscriptionModalProps {
	message?: IMessage;
	open: boolean;
	handleClose: () => void;
}

const StyledDialog = styled(Dialog)`
	& .MuiPaper-root {
		padding: 10px;
		@media ${devices.laptop} {
			padding: 30px;
		}
	}
`;

const StyledDialogContentText = styled(DialogContentText)`
	font-size: 20px;
	font-weight: 700;
	margin: 10px 0;
	@media ${devices.laptop} {
		font-size: 30px;
	}
`;

const StyledCheckCircleIcon = styled(CheckCircleIcon)`
	color: ${darkPrimaryColor};
	font-size: 60px;
	@media ${devices.laptop} {
		font-size: 80px;
	}
`;

const StyledCancelIcon = styled(CancelIcon)`
	color: ${warningColor};
	font-size: 60px;
	@media ${devices.laptop} {
		font-size: 80px;
	}
`;

const StyledInfoIcon = styled(InfoIcon)`
	color: ${InfoColor};
	font-size: 60px;
	@media ${devices.laptop} {
		font-size: 80px;
	}
`;

const messageIcon: Record<TMessageType, React.ReactElement> = {
	success: <StyledCheckCircleIcon />,
	error: <StyledCancelIcon />,
	info: <StyledInfoIcon />
};

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ message, open, handleClose }) => {
	return message ? (
		<StyledDialog open={open} onClose={handleClose}>
			<DialogContent className="text-center">
				{messageIcon[message.type]}
				<StyledDialogContentText>{message.message}</StyledDialogContentText>
			</DialogContent>
			<DialogActions className="flex justify-center">
				<ThemeButton onClick={handleClose}>Ok</ThemeButton>
			</DialogActions>
		</StyledDialog>
	) : null;
};

export default SubscriptionModal;
