import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ClickAwayListener } from '@mui/material';
import { isEmpty } from 'lodash';
import Image from 'next/image';
import React, { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

import fetchCitiesList from '@/services/cities';
import getStateFromCoordinates from '@/services/getStateFromCoordinates';
import { color } from '@/styles/variables';
import imageLoader from '@/utils/loader';
import { isAlphaNumericSpace } from '@/utils/validator';

const { whiteColor, darkPrimaryColor, inputTextColor } = color;
const MainContainer = styled.div`
	position: relative;
	width: 100%;
`;
const StyledInput = styled.input`
	align-items: center;
	background-color: transparent;
	border: none;
	color: ${inputTextColor};
	cursor: pointer;
	display: flex;
	font-size: 20px;
	height: 60px;
	justify-content: space-between;
	letter-spacing: 1px;
	outline: none;
	padding: 10px 15px;
	width: 100%;
`;
const LocationIcon = styled(Image)`
	margin-right: 10px;
`;
const DropdownContentIcon = styled(Image)`
	font-size: 1.4em;
	margin-right: 10px;
`;
const TextAndIconContainer = styled.div`
	align-items: center;
	border-bottom: 1px solid white;
	display: flex;
	&:hover {
		border-bottom: 1px solid ${darkPrimaryColor};
	}
	min-width: 100%;
	padding: 5px 0;
`;
const DropdownContent = styled.div`
	background-color: #121212;
	border: 1px solid #3c3c3c;
	border-radius: 5px;
	margin-top: 10px;
	position: absolute;
	top: 70px;
	width: 100%;
`;
const DropdownOption = styled.button`
	align-items: center;
	background-color: transparent;
	border: none;
	color: ${whiteColor};
	cursor: pointer;
	display: flex;
	height: 60px;
	padding: 10px 15px;
	text-align: left;
	width: 100%;
`;
const CurrentLocation = styled(DropdownOption)`
	background-color: #1f1f1f;
	height: 45px;
`;

const CurrentLocationContainer = styled(DropdownOption)`
	display: flex;
	padding: 10px 0;
	position: relative;
	&::after {
		border-bottom: solid 1px #3c3c3c;
		bottom: 0;
		content: '';
		left: 50%;
		position: absolute;
		transform: translateX(-50%);
		width: 95%;
	}
`;
interface StyledIconProps {
	isExpanded: boolean;
}
const StyledKeyboardArrowDownIcon = styled(KeyboardArrowDownIcon)<StyledIconProps>`
	color: ${whiteColor};
	transform: ${({ isExpanded }) => (isExpanded ? 'rotate(180deg)' : 'rotate(0deg)')};
`;
const ErrorMessage = styled.div`
	color: red;
	font-size: 12px;
`;
const LocationText = styled.div`
	display: grid;
	gap: 3px;
`;
const LocationLabel = styled.div`
	color: ${inputTextColor};
	font-size: 12px;
`;

interface ICity {
	_id: string;
	name: string;
	state: string;
	country: string;
}

interface ChooseLocationProps {
	onLocationChange: (location: string) => void;
}

const ChooseLocation: React.FC<ChooseLocationProps> = ({ onLocationChange }) => {
	// searching history list, will be replaced.
	const [searchedLocations, setSearchedLocations] = useState<ICity[]>([]);
	const [isExpanded, setIsExpanded] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [filteredCities, setFilteredCities] = useState<ICity[]>([]);
	const handleClickAway = () => {
		setIsExpanded(false);
	};
	const [inputError, setInputError] = useState('');
	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		let value = event.target.value.toLowerCase();
		setInputError('');

		if (!isAlphaNumericSpace(value)) {
			setInputError('Special characters are not allowed.');
			value = value.replace(/[^a-z0-9\s]/gi, '');
		}
		if (value.length > 50) {
			setInputError('The maximum length is 50 characters.');
			value = value.slice(0, 50);
		}
		setInputValue(value);
		if (value.trim() === '') {
			// When input is empty, reset to the initial list
			setFilteredCities(searchedLocations);
		} else {
			// Filter cities based on input value
			const filtered = searchedLocations.filter(city =>
				city.name.toLowerCase().startsWith(value)
			);
			setFilteredCities(filtered);
		}
	};
	const extractLocalityName = (response: GeocodeResult[]) => {
		if (!response || response.length === 0) return '';

		const localityComponent = response
			.flatMap(result => result.address_components)
			.find(component => component.types.includes('locality'));

		return localityComponent ? localityComponent.long_name : '';
	};
	const handleUseCurrentLocation = () => {
		navigator.geolocation.getCurrentPosition(async position => {
			const { latitude, longitude } = position.coords;
			try {
				const response = await getStateFromCoordinates(
					latitude.toString(),
					longitude.toString()
				);
				const localityName = extractLocalityName(response.data.results);

				if (localityName) {
					setInputValue(localityName);
					onLocationChange(localityName);
					setInputError('');
					setIsExpanded(false);
				} else {
					setInputError('Unable to determine location name');
				}
			} catch (error) {
				setInputError('Error getting current location');
			}
		});
	};
	const handleOptionClick = (location: string) => {
		setInputValue(location);
		setIsExpanded(false);
		onLocationChange(location);
	};
	const fetchCities = async () => {
		const response = await fetchCitiesList();
		setSearchedLocations(response.data);
	};

	useEffect(() => {
		fetchCities();
	}, []);
	useEffect(() => {
		setFilteredCities(searchedLocations); // Initialize filteredCities on component mount
	}, [searchedLocations]);

	return (
		<ClickAwayListener onClickAway={handleClickAway}>
			<MainContainer>
				<TextAndIconContainer>
					<LocationIcon
						loader={imageLoader}
						src="/images/icons/location.png"
						alt="location icon"
						width={22}
						height={22}
					/>
					<StyledInput
						placeholder="Choose a location"
						value={inputValue}
						onChange={handleInputChange}
						onFocus={() => setIsExpanded(true)}
					/>
					<StyledKeyboardArrowDownIcon
						onClick={() => setIsExpanded(!isExpanded)}
						isExpanded={isExpanded}
					/>
				</TextAndIconContainer>
				{inputError && <ErrorMessage>{inputError}</ErrorMessage>}
				{isExpanded && (
					<DropdownContent>
						<CurrentLocationContainer>
							<CurrentLocation onClick={handleUseCurrentLocation}>
								<DropdownContentIcon
									loader={imageLoader}
									src="/images/icons/current-location.svg"
									alt="current location"
									width={13}
									height={13}
								/>
								Use my current location
							</CurrentLocation>
						</CurrentLocationContainer>
						{(isEmpty(inputValue.trim()) ? searchedLocations : filteredCities).map(
							(city: ICity) => (
								<DropdownOption
									key={city._id}
									onClick={() => handleOptionClick(city.name)}
								>
									<DropdownContentIcon
										loader={imageLoader}
										src="/images/icons/search-history.svg"
										alt="search history"
										width={13}
										height={13}
									/>
									<LocationText>
										{city.name}
										<LocationLabel>
											{city.state},{city.country}
										</LocationLabel>
									</LocationText>
								</DropdownOption>
							)
						)}
					</DropdownContent>
				)}
			</MainContainer>
		</ClickAwayListener>
	);
};

export default ChooseLocation;
