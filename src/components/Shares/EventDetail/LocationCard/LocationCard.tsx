import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import EventLocation from '../EventLocation';

import calculateDistanceFromCoordinates from '@/services/calculateDistanceFromCoordinates';
import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { cardBackgroundColor, greyColor, primaryColor } = color;

const dateIcon = '/images/icons/date.svg';
const locationIcon = '/images/icons/location.svg';

const StyledCard = styled(Card)`
	background-color: ${cardBackgroundColor};
	border-radius: 0;
	display: flex;
	flex-direction: column;
	height: 540px;
	width: 330px;
	@media ${devices.mobile} {
		width: 400px;
		min-width: 400px;
	}
`;
const StyledCardContent = styled(CardContent)`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	gap: 24px;
	margin-top: 16px;
`;
const DateInfo = styled.span`
	color: ${greyColor};
	font-size: 16px;
	margin-left: 8px;
	&:hover {
		color: ${primaryColor};
	}
`;
const InfoContainer = styled.div`
	align-items: baseline;
	color: ${greyColor};
	display: flex;
	font-size: 16px;
	letter-spacing: 1px;
	line-height: 1.5;
	padding-left: 16px;
`;
const ImageContainer = styled.div`
	height: 14px;
	min-width: 14px;
	position: relative;
`;

const MapContainer = styled.div`
	height: 344px;
	padding: 0px 12px 12px 12px;
	width: auto;
`;

const ErrorMessage = styled.span`
	color: red;
`;
interface eventDetailProps {
	eventDetail: IMeetup;
}
dayjs.extend(utc);
dayjs.extend(timezone);
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const format: string = 'dddd, MMM D, hA [GMT]Z';
const LocationCard: React.FC<eventDetailProps> = ({ eventDetail }) => {
	const { maxRSVPs, address, period } = eventDetail || {};

	const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | undefined>(
		undefined
	);
	const [eventCoordinates, setEventCoordinates] = useState<
		{ lat: number; lng: number } | undefined
	>(undefined);
	const [distance, setDistance] = useState<number | undefined>(undefined);

	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(position => {
				setUserLocation({
					lat: position.coords.latitude,
					lng: position.coords.longitude
				});
			});
		}
	}, []);
	useEffect(() => {
		const fetchCoordinates = async () => {
			try {
				const response = await fetch(
					`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
						address
					)}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`
				);
				const data = await response.json();
				if (data.results && data.results.length > 0 && data.results[0].geometry) {
					const { lat, lng } = data.results[0].geometry.location;
					setEventCoordinates({ lat, lng });
				} else {
					setError('Location data not available');
				}
			} catch (err) {
				setError('Failed to fetch exhibitor coordinates');
			}
		};

		if (address) {
			fetchCoordinates();
		}
	}, [address]);

	useEffect(() => {
		const calculateDistance = async () => {
			if (userLocation && eventCoordinates) {
				try {
					const response = await calculateDistanceFromCoordinates(
						userLocation,
						eventCoordinates
					);

					setDistance(response.data.distance);
				} catch (err) {
					setError('Failed to fetch distance');
				}
			}
		};

		calculateDistance();
	}, [userLocation, eventCoordinates]);
	return (
		<StyledCard>
			<StyledCardContent>
				{maxRSVPs && (
					<InfoContainer>
						<ImageContainer>
							<Image
								src={locationIcon}
								alt="address"
								fill
								loader={imageLoader}
								unoptimized
							/>
						</ImageContainer>
						<DateInfo>{maxRSVPs}+ People</DateInfo>
					</InfoContainer>
				)}
				{period?.start && (
					<InfoContainer>
						<ImageContainer>
							<Image
								src={dateIcon}
								alt="date"
								fill
								loader={imageLoader}
								unoptimized
							/>
						</ImageContainer>
						<DateInfo>{dayjs(period.start).utc().local().format(format)}</DateInfo>
					</InfoContainer>
				)}
				{address && (
					<InfoContainer>
						<ImageContainer>
							<Image
								src={locationIcon}
								alt="address"
								fill
								loader={imageLoader}
								unoptimized
							/>
						</ImageContainer>
						<div>
							<DateInfo style={{ display: 'block' }}>{address}</DateInfo>

							<DateInfo style={{ display: 'block' }}>
								{/* (Distance from you {distance.toFixed(2)} km) */}
								{distance !== undefined
									? `(Distance from you ${distance})`
									: '(Calculating distance...)'}
							</DateInfo>
						</div>
					</InfoContainer>
				)}
				<MapContainer>
					{eventCoordinates && <EventLocation eventCoordinates={eventCoordinates} />}
				</MapContainer>
				{error && <ErrorMessage>Error: {error}</ErrorMessage>}
			</StyledCardContent>
		</StyledCard>
	);
};

export default LocationCard;
