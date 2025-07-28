import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import { color } from '@/styles/variables';
import imageLoader from '@/utils/loader';
import { isAlphaNumericSpace } from '@/utils/validator';

const { darkPrimaryColor, inputTextColor } = color;

const MainContainer = styled.div`
	position: relative;
	width: 100%;
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
const SearchIcon = styled(Image)``;

const ErrorMessage = styled.div`
	color: red;
	font-size: 12px;
`;
interface InputTextFilterProps {
	onInputChange: (value: string) => void;
}

const InputTextFilter = ({ onInputChange }: InputTextFilterProps) => {
	const [inputValue, setInputValue] = useState('');
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
		onInputChange(value);
	};

	return (
		<MainContainer>
			<TextAndIconContainer>
				<SearchIcon
					loader={imageLoader}
					src="/images/icons/searchIcon.svg"
					alt="location icon"
					width={28}
					height={28}
				/>
				<StyledInput
					placeholder="Search Events"
					value={inputValue}
					onChange={handleInputChange}
				/>
			</TextAndIconContainer>
			{inputError && <ErrorMessage>{inputError}</ErrorMessage>}
		</MainContainer>
	);
};

export default InputTextFilter;
