import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import ExhibitorLocationOnMap from '../ExhibitorLocationOnMap';

import { IExhibitor } from '@/interfaces/exhibitor';
import calculateDistanceFromCoordinates from '@/services/calculateDistanceFromCoordinates';
import { color } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const Container = styled.div`
	background-color: #1a1a1a;
	height: 636px;
	max-width: 400px;
`;
const InfoContainer = styled.div`
	padding: 24px 33px 0;
`;
const DetailContainer = styled.div`
	margin-bottom: 24px;
`;

const StyleIcon = styled(Image)`
	margin-right: 9px;
`;

const Detail = styled.span`
	color: ${color.greyColor};
	letter-spacing: 1px;
	line-height: 1.5;
`;

const ExhibitorLocationOnMapContainer = styled.div`
	height: 344px;
	padding: 0px 12px 12px 12px;
	width: auto;
`;
const ErrorMessage = styled.span`
	color: red;
`;

const ExhibitorDetailedInformation: React.FC<{ exhibitorInfo: IExhibitor }> = ({
	exhibitorInfo
}) => {
	const [userCoordinates, setUserCoordinates] = useState<
		{ lat: number; lng: number } | undefined
	>(undefined);
	const [exhibitorCoordinates, setExhibitorCoordinates] = useState<
		{ lat: number; lng: number } | undefined
	>(undefined);
	const [distance, setDistance] = useState<number | undefined>(undefined);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			position => {
				setUserCoordinates({
					lat: position.coords.latitude,
					lng: position.coords.longitude
				});
			},
			err => {
				setError(err.message);
			}
		);
	}, []);

	useEffect(() => {
		const fetchCoordinates = async () => {
			try {
				const response = await fetch(
					`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
						exhibitorInfo.branchAddress
					)}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`
				);
				const data = await response.json();
				if (data.results && data.results.length > 0 && data.results[0].geometry) {
					const { lat, lng } = data.results[0].geometry.location;
					setExhibitorCoordinates({ lat, lng });
				} else {
					setError('Location data not available');
				}
			} catch (err) {
				setError('Failed to fetch exhibitor coordinates');
			}
		};

		if (exhibitorInfo.branchAddress) {
			fetchCoordinates();
		}
	}, [exhibitorInfo.branchAddress]);

	useEffect(() => {
		const calculateDistance = async () => {
			if (userCoordinates && exhibitorCoordinates) {
				try {
					const response = await calculateDistanceFromCoordinates(
						userCoordinates,
						exhibitorCoordinates
					);

					setDistance(response.data.distance);
				} catch (err) {
					setError('Failed to fetch distance');
				}
			}
		};

		calculateDistance();
	}, [userCoordinates, exhibitorCoordinates]);

	const roundUpToNearestHundred = (num: number) => {
		return Math.floor(num / 100) * 100;
	};
	const roundedStaffAmount = roundUpToNearestHundred(exhibitorInfo.staffAmount);
	return (
		<Container>
			<InfoContainer>
				<DetailContainer>
					<StyleIcon
						loader={imageLoader}
						alt="location icon"
						src="/icons/people.svg"
						width={16}
						height={16}
					/>
					<Detail>{roundedStaffAmount}+ employees</Detail>
				</DetailContainer>
				<DetailContainer>
					<StyleIcon
						loader={imageLoader}
						alt="location icon"
						src="/icons/internet.svg"
						width={16}
						height={16}
					/>
					<Detail>{exhibitorInfo.website}</Detail>
				</DetailContainer>
				<DetailContainer>
					<StyleIcon
						loader={imageLoader}
						alt="location icon"
						src="/icons/email.svg"
						width={16}
						height={16}
					/>
					<Detail>{exhibitorInfo.email}</Detail>
				</DetailContainer>
				<DetailContainer>
					<StyleIcon
						loader={imageLoader}
						alt="location icon"
						src="/icons/industry.svg"
						width={16}
						height={16}
					/>
					<Detail>{exhibitorInfo.industry} Industry</Detail>
				</DetailContainer>
				<DetailContainer>
					<StyleIcon
						loader={imageLoader}
						alt="location icon"
						src="/icons/location-icon.svg"
						width={16}
						height={16}
					/>
					<Detail>
						{exhibitorInfo.officeAddress} <br />{' '}
						{distance !== undefined
							? `(Distance from you ${distance})`
							: '(Calculating distance...)'}
					</Detail>
				</DetailContainer>
			</InfoContainer>
			<ExhibitorLocationOnMapContainer>
				{exhibitorCoordinates && (
					<ExhibitorLocationOnMap exhibitorCoordinates={exhibitorCoordinates} />
				)}
			</ExhibitorLocationOnMapContainer>
			{error && <ErrorMessage>Error: {error}</ErrorMessage>}
		</Container>
	);
};

export default ExhibitorDetailedInformation;
