import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Dialog from '@mui/material/Dialog';
import styled, { css } from 'styled-components';

import { color } from '@/styles/variables';

const { whiteColor } = color;

interface ImageModalProps {
	open: boolean;
	onClose: () => void;
	image: IImageGalleryItem;
	onPrev: () => void;
	onNext: () => void;
	imageIndicator: string;
}

const ModalContent = styled.div`
	overflow: hidden;
`;

const StyledIcon = css`
	color: ${whiteColor};
	cursor: pointer;
	margin: 0 16px;
	opacity: 0;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
`;

const StyledArrowBackIosNewIcon = styled(ArrowBackIosNewIcon)`
	${StyledIcon};
	left: 0;
`;

const StyledArrowForwardIosIcon = styled(ArrowForwardIosIcon)`
	${StyledIcon};
	right: 0;
`;

const ImageItem = styled.div`
	position: relative;
	&:hover svg {
		opacity: 1;
	}
`;

const StyledImage = styled.img`
	display: block;
	max-height: 80vh;
	max-width: 80vw;
	object-fit: cover;
`;

const BottomBar = styled.div`
	padding: 10px 20px;
`;

const ArrowIconContainer = styled.div`
	svg {
		cursor: pointer;
		margin: 0 6px;
	}
`;

const ImageIndicator = styled.p`
	flex: 1;
	font-size: 18px;
	margin: 0;
	text-align: center;
`;

const ImageModal: React.FC<ImageModalProps> = ({
	open,
	onClose,
	image,
	onPrev,
	onNext,
	imageIndicator
}) => {
	return image ? (
		<Dialog open={open} onClose={onClose}>
			<ModalContent>
				<ImageItem>
					<StyledArrowBackIosNewIcon onClick={onPrev} />
					<StyledImage src={image.imageSrc} alt={image._id} key={image._id} />
					<StyledArrowForwardIosIcon onClick={onNext} />
				</ImageItem>
				<BottomBar className="flex items-center">
					<ArrowIconContainer className="flex items-center">
						<ArrowBackIosNewIcon fontSize="small" onClick={onPrev} />
						<ArrowForwardIosIcon fontSize="small" onClick={onNext} />
					</ArrowIconContainer>
					<ImageIndicator>{imageIndicator}</ImageIndicator>
				</BottomBar>
			</ModalContent>
		</Dialog>
	) : null;
};

export default ImageModal;
