import { Box, Modal } from '@mui/material';
import styled from 'styled-components';

import { color, devices } from '@/styles/variables';

const { whiteColor } = color;

interface ShowMessageModalProps {
	children: React.ReactNode;
	open: boolean;
	handleClose: () => void;
}

const StyledBox = styled(Box)`
	background-color: ${whiteColor};
	border: solid 1px #969696;
	box-shadow: 24px;
	display: flex;
	height: fit-content;
	left: 50%;
	padding: 16px;
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 90%;
	@media ${devices.mobile} {
		width: calc(100vw - 115px);
		border: solid 1px #969696;
	}

	@media ${devices.laptop} {
		width: 424px;
		border: solid 1px #969696;
		height: 90px;
	}
`;

const ShowMessageModal: React.FC<ShowMessageModalProps> = ({ children, open }) => {
	return (
		<Modal open={open}>
			<StyledBox>{children}</StyledBox>
		</Modal>
	);
};

export default ShowMessageModal;
