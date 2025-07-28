import { FormControl, Input } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

import { color, devices, inputColor } from '@/styles/variables';

const { darkPrimaryColor } = color;
const { placeholderColor } = inputColor;

const FormLabel = styled.span`
	font-size: 16px;
	margin-bottom: 5px;
	&.mobile {
		@media ${devices.tablet} {
			width: 270px;
		}
		@media ${devices.laptop} {
			width: 400px;
		}
	}
`;

const StyledInput = styled(Input)`
	color: ${placeholderColor};
	@media ${devices.laptop} {
		font-size: 18px;
	}
	&::before {
		display: none;
	}
	&:after {
		display: none;
	}
	input {
		border: none;
		border-bottom: 1px solid ${placeholderColor};
		margin: 0 0 36px;
		padding: 7px 0;
		&:hover {
			border-color: ${darkPrimaryColor};
			transition: border-color 0.3s ease;
		}
	}
`;

const FormGrid = styled.div<{ isTwoColumn: boolean }>`
	@media ${devices.largeLaptop} {
		grid-column: ${props => (props.isTwoColumn ? 'span 1' : 'span 2')};
	}
	width: 100%;
`;

const renderFormControl = (control: IFormControlData, isTwoColumn: boolean) => (
	<FormGrid isTwoColumn={isTwoColumn}>
		<FormControl key={control.name} fullWidth>
			<FormLabel>{control.labelText}</FormLabel>
			<StyledInput
				type={control.type}
				name={control.name}
				required={control.required}
				placeholder={control.placeholder ? control.placeholder : undefined}
			/>
		</FormControl>
	</FormGrid>
);

export default renderFormControl;
