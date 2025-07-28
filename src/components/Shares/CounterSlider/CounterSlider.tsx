import Grid from '@mui/material/Grid';
import { chunk } from 'lodash';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import CounterItem from './components/CounterItem';
import { color, devices } from '@/styles/variables';

const { darkPrimaryColor, primaryColor, whiteColor, textColor } = color;

interface CounterSliderProps {
	counterList?: ICounter[];
	theme?: TSectionTheme;
	perSlider?: number;
}

interface IThemeProps {
	theme?: TSectionTheme;
}

const CounterSliderContainer = styled.div<IThemeProps>`
	color: ${({ theme }) => (theme === 'dark' ? whiteColor : textColor)};
	margin: 0 auto;
	@media ${devices.mobile} {
		padding: 0 20px;
	}
`;

const Counter = styled.div`
	align-items: flex-end;
	margin: 20px;
	text-align: center;
`;

const CounterName = styled.h4`
	color: ${({ theme }) => (theme === 'dark' ? primaryColor : darkPrimaryColor)};
	font-size: 18px;
	font-weight: 700;
	margin: 0;
	@media ${devices.laptop} {
		font-size: 18px;
	}
`;

const Count = styled.div`
	font-size: 32px;
	font-weight: 700;
	@media ${devices.mobile} {
		font-size: 32px;
	}
	@media ${devices.tablet} {
		font-size: 40px;
	}
	@media ${devices.laptop} {
		font-size: 50px;
	}
	@media ${devices.largeLaptop} {
		font-size: 64px;
	}
`;
const StyledCarousel = styled(Carousel)<{ theme: TSectionTheme }>`
	.control-prev.control-arrow:before {
		${({ theme }) => theme === 'light' && 'border-right-color: black ;'}
	}

	.control-next.control-arrow:before {
		${({ theme }) => theme === 'light' && 'border-left-color: black ;'}
	}
`;
const CounterSlider: React.FC<CounterSliderProps> = ({
	counterList = [],
	theme = 'dark',
	perSlider = 4
}) => {
	const chunkList = chunk(counterList, perSlider);
	const [current, setCurrent] = useState<number>(0);
	return (
		<CounterSliderContainer theme={theme}>
			<StyledCarousel
				theme={theme}
				autoPlay
				infiniteLoop
				showStatus={false}
				showThumbs={false}
				showIndicators={false}
				onChange={index => setCurrent(index)}
				interval={4000}
			>
				{chunkList.map((counters, index) => (
					<Grid container className="flex justify-center" key={counters[0].name}>
						{counters.map(counter => (
							<Grid
								item
								miniMobile={6}
								mobile={6}
								laptop={12 / perSlider}
								className="flex justify-center"
								key={counter.name}
							>
								<Counter key={counter.name}>
									<Count>
										<CounterItem
											end={counter.count}
											duration={2}
											suffix={counter.suffix || '+'}
											shouldReset={index === current}
										/>
									</Count>
									<CounterName>{counter.name}</CounterName>
								</Counter>
							</Grid>
						))}
					</Grid>
				))}
			</StyledCarousel>
		</CounterSliderContainer>
	);
};

export default CounterSlider;
