import CallMadeIcon from '@mui/icons-material/CallMade';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState } from 'react';
import styled from 'styled-components';

import ImageModal from './components/ImageModal';
import { animationHoverImage, animationHoverImageParent } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';

interface PageGalleryProps {
	imageList: {
		_id: string;
		imageSrc: string;
		rows?: number;
		cols?: number;
	}[];
}

const { primaryColor } = color;

const HomeGalleryContainer = styled(ImageList)`
	display: flex;
	flex-direction: column;
	width: 100vw;
	@media ${devices.mobile} {
		display: grid;
	}
`;

const StyledImageListItem = styled(ImageListItem)`
	cursor: pointer;

	&:hover div {
		-moz-transform: translate3d(0, 0, 0);
		-moz-transition: -moz-transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
		-webkit-transform: translate3d(0, 0, 0);
		-webkit-transition: -webkit-transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
		transform: translate3d(0, 0, 0);
		transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
	}
`;

const ImageItem = styled.div`
	${animationHoverImageParent()};
	height: 100%;
`;

const StyledImage = styled.img`
	${animationHoverImage()};
`;

const CallMadeIconContainer = styled.div`
	-moz-transform: translate3d(-100%, 0, 0);
	-moz-transition: -moz-transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
	-webkit-transform: translate3d(-100%, 0, 0);
	-webkit-transition: -webkit-transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
	align-items: center;
	background-color: ${primaryColor};
	bottom: 0;
	display: flex;
	height: 50px;
	justify-content: center;
	left: 0;
	line-height: 50px;
	position: absolute;
	top: auto;
	transform: translate3d(-100%, 0, 0);
	transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
	width: 50px;
	@media ${devices.mobile} {
		width: 77px;
		height: 77px;
		line-height: 77px;
	}
`;

const PageGallery: React.FC<PageGalleryProps> = props => {
	const { imageList } = props;
	const [open, setOpen] = useState<boolean>(false);
	const [selectImageIndex, setSelectImageIndex] = useState<number>();
	const handleOpen = (imageIndex: number) => {
		setSelectImageIndex(imageIndex || 0);
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
		setSelectImageIndex(undefined);
	};
	const handlePrev = () => {
		if (selectImageIndex || selectImageIndex === 0) {
			if (selectImageIndex === 0) {
				setSelectImageIndex(imageList.length - 1);
			} else {
				setSelectImageIndex(selectImageIndex - 1);
			}
		}
	};
	const handleNext = () => {
		if (selectImageIndex || selectImageIndex === 0) {
			if (selectImageIndex === imageList.length - 1) {
				setSelectImageIndex(0);
			} else {
				setSelectImageIndex(selectImageIndex + 1);
			}
		}
	};
	return (
		<HomeGalleryContainer variant="quilted" cols={4} rowHeight="auto" gap={8}>
			{imageList.map((image, index) => (
				<StyledImageListItem
					key={image._id}
					cols={image?.cols || 1}
					rows={image?.rows || 1}
					className="overflow-hidden"
					onClick={() => handleOpen(index)}
				>
					<ImageItem>
						<StyledImage src={image.imageSrc} alt={image._id} />
					</ImageItem>
					<CallMadeIconContainer>
						<CallMadeIcon />
					</CallMadeIconContainer>
				</StyledImageListItem>
			))}
			<ImageModal
				image={imageList[selectImageIndex || 0]}
				open={open}
				onClose={handleClose}
				onPrev={handlePrev}
				onNext={handleNext}
				imageIndicator={`${(selectImageIndex || 0) + 1} / ${imageList.length}`}
			/>
		</HomeGalleryContainer>
	);
};

export default PageGallery;
