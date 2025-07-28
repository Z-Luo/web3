import { Box, Modal } from '@mui/material';
import Image from 'next/image';
import styled from 'styled-components';

import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { blackColor } = color;

interface MemberModalProps {
	children: React.ReactNode;
	open: boolean;
	handleClose: () => void;
}

const mobilePaddingLeft = '24px';

const StyledBox = styled(Box)`
	background-color: ${blackColor};
	background-image: url('/images/modal-background.png');
	background-position: top left;
	background-repeat: no-repeat;
	background-size: 80%;
	border: solid 1px #e49f2b;
	border-radius: 8px;
	box-shadow: 24px;
	display: flex;
	flex-direction: column;
	height: fit-content;
	left: 50%;
	padding: 40px ${mobilePaddingLeft};
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 90%;
	@media ${devices.mobile} {
		width: 500px;
		padding: 40px 70px;
		border: solid 1px #ce709a;
	}

	@media ${devices.laptop} {
		width: 714px;
		padding: 40px 70px;
		border: solid 1px #ce709a;
	}
`;

const StyledButton = styled.div`
	bottom: -60px;
	cursor: pointer;
	height: 44px;
	left: calc(50% - ${mobilePaddingLeft});
	position: absolute;
	width: 44px;
	@media${devices.mobile} {
		right: -22px;
		top: -22px;
		left: unset;
		bottom: unset;
	}
`;

const MemberModal: React.FC<MemberModalProps> = ({ children, open, handleClose }) => {
	return (
		<Modal open={open}>
			<StyledBox>
				{children}
				<StyledButton onClick={handleClose}>
					<Image
						src="/images/icons/modal-button.svg"
						alt="button"
						loader={imageLoader}
						unoptimized
						fill
					/>
				</StyledButton>
			</StyledBox>
		</Modal>
	);
};

export default MemberModal;
