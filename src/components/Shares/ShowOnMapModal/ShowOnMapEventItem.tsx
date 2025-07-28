import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import ClockPin from './EventModalLogo/clock-pin.svg';
import LocationPin from './EventModalLogo/location-pin.svg';
import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { whiteColor, greyColor } = color;

const Container = styled.div`
	align-items: center;
	background-color: #1a1a1a;
	border: 4px solid transparent;
	border-image: linear-gradient(to bottom, #52f6c6 0%, #529bf6) 1 / 0 4px 0 0;
	border-image-slice: 1;
	display: flex;
	flex-direction: column;
	margin-bottom: 16px;
	max-width: 717px;
	padding: 16px;
	@media ${devices.largeLaptop} {
		flex-direction: row;
		flex-grow: 1;
		height: 148px;
	}
`;
const ImageWrapper = styled.div`
	height: auto;
	padding-bottom: 15px;
	width: 245px;
	@media ${devices.mobile} {
		padding-bottom: 0px;
	}
`;
const StyledImage = styled(Image)`
	width: 100%;
`;
const InfoContainer = styled.div`
	color: ${greyColor};
	display: flex;
	flex-direction: column;
	font-size: 16px;
	gap: 10px;
	height: 100%;
	justify-content: space-between;
	letter-spacing: 1px;
	line-height: 1.5;
	padding: 0 15px;
	@media ${devices.mobile} {
		padding: 0 27px;
	}
`;
const EventTitle = styled.span`
	color: ${whiteColor};
	font-size: 20px;
	font-weight: bold;
	letter-spacing: 1px;
	line-height: 1.25;
`;
const TimeAndLocationContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: row;
`;
const Description = styled.span`
	margin-left: 9px;
	width: 100%;
`;

interface EventCardProps {
	event: IMeetup;
}

const ShowOnMapEventItem: React.FC<EventCardProps> = ({ event }) => {
	const { _id, bannersUploader, title, location, city, period } = event;
	const cityNames = city ? city.map(detail => detail.name).join(', ') : '';
	const formattedDate =
		period?.start && dayjs(period.start).utc().local().format('ddd, MMM D, YYYY, hA [GMT]Z');

	return (
		<Link href={`/event/${_id}`}>
			<Container>
				<ImageWrapper>
					<StyledImage
						src={bannersUploader?.url}
						alt="Event Photo"
						width={245}
						height={116}
						loader={imageLoader}
						unoptimized
						priority
					/>
				</ImageWrapper>
				<InfoContainer>
					<EventTitle>{title}</EventTitle>
					<TimeAndLocationContainer>
						<ClockPin />
						<Description>{formattedDate}</Description>
					</TimeAndLocationContainer>
					<TimeAndLocationContainer>
						<LocationPin />
						<Description>
							{location}, {cityNames}
						</Description>
					</TimeAndLocationContainer>
				</InfoContainer>
			</Container>
		</Link>
	);
};

export default ShowOnMapEventItem;
