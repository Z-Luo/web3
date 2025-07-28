import Grid from '@mui/material/Grid';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import TestimonialItem from './components/TestimonialItem';
import testimonialList from './testimonialList.json';
import useResize from '@/hooks/useResize';
import { carouselStyle, sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { devices, sizes } from '@/styles/variables';

const HomeTestimonialContainer = styled.div`
	max-width: ${`${sizes.largeLaptop}px`};
	padding: 100px 40px 140px;
	@media ${devices.mobile} {
		padding: 100px 100px 140px;
	}
	@media ${devices.laptop} {
		margin: 0 auto;
	}
	${carouselStyle};
`;

const Title = styled.h2`
	${sectionTitle};
`;

const Subtitle = styled.p`
	${sectionSubtitle};
`;

const HomeTestimonial: React.FC = () => {
	const { isMobile } = useResize(sizes.tablet);

	return (
		<HomeTestimonialContainer>
			<Subtitle>event_testimonials</Subtitle>
			<Title>What Members Are Saying</Title>
			<Carousel
				autoPlay
				infiniteLoop
				showArrows={false}
				showStatus={false}
				showThumbs={false}
				swipeable={false}
				interval={6000}
				transitionTime={1000}
			>
				{isMobile
					? testimonialList.map(testimonial => (
							<Grid
								item
								tablet={6}
								className="flex justify-center"
								key={`${testimonial._id}`}
							>
								<TestimonialItem testimonial={testimonial} />
							</Grid>
					  ))
					: testimonialList
							.filter((_, index) => index % 2 === 0)
							.map((testimonial, index) => (
								<Grid
									container
									key={`${testimonial._id}`}
									className="flex justify-between"
								>
									<Grid item tablet={6} className="flex justify-center">
										<TestimonialItem testimonial={testimonialList[index * 2]} />
									</Grid>
									<Grid item tablet={6} className="flex justify-center">
										{testimonialList[index * 2 + 1] && (
											<TestimonialItem
												testimonial={testimonialList[index * 2 + 1]}
											/>
										)}
									</Grid>
								</Grid>
							))}
			</Carousel>
		</HomeTestimonialContainer>
	);
};

export default HomeTestimonial;
