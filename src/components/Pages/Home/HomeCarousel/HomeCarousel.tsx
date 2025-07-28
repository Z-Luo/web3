import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import carouselList from './carouselList.json';
import CarouseItem from './components/CarouseItem';
import { carouselStyle } from '@/styles/mixin';
import { devices, headerHeight } from '@/styles/variables';

const CarouselContainer = styled.div`
	height: fit-content;
	margin-top: ${`-${headerHeight}`};
	${carouselStyle};
	.control-dots {
		bottom: 50px;
		@media ${devices.laptop} {
			bottom: 100px;
		}
	}
`;

const HomeCarousel: React.FC = () => {
	const [current, setCurrent] = useState<number>(0);
	const showIndicators = carouselList.length > 1;
	return (
		<CarouselContainer>
			<Carousel
				autoPlay
				infiniteLoop
				showArrows={false}
				showStatus={false}
				showThumbs={false}
				swipeable={false}
				onChange={index => setCurrent(index)}
				interval={6000}
				transitionTime={1000}
				animationHandler="fade"
				showIndicators={showIndicators}
			>
				{carouselList.map((carouselInfo, index) => (
					<CarouseItem
						carouselInfo={carouselInfo}
						key={carouselInfo._id}
						isCurrent={current === index}
					/>
				))}
			</Carousel>
		</CarouselContainer>
	);
};

export default HomeCarousel;
