import { Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';

import { color } from '@/styles/variables';

const { whiteColor, primaryColor } = color;

const MainContainer = styled.div`
	margin-top: 60px;
	width: 100%;
`;

const StyledTypography = styled(Typography)`
	color: ${whiteColor};
	font-size: 18px;
	font-weight: bold;
`;

type ButtonProps = {
	active: boolean;
};
const Button = styled.button<ButtonProps>`
	background-color: #242424;
	border: solid 1px ${props => (props.active ? primaryColor : 'transparent')};
	border-radius: 18px;
	color: ${props => (props.active ? primaryColor : whiteColor)};
	cursor: pointer;
	font-size: 16px;
	height: 36px;
	margin-right: 16px;
	padding: 6px 20px;
	width: 77px;
`;

const ButtonGroup = styled.div`
	margin-top: 16px;
`;

interface PriceFilterProps {
	onPriceChange: (selectedPrice: 'free' | 'paid') => void;
}
const PriceFilter: React.FC<PriceFilterProps> = ({ onPriceChange }) => {
	const [active, setActive] = useState('');
	const handlePriceChange = (selectedPrice: Price) => {
		setActive(selectedPrice);
		onPriceChange(selectedPrice);
	};

	return (
		<div>
			<MainContainer>
				<StyledTypography>Price</StyledTypography>
				<ButtonGroup>
					<Button active={active === 'free'} onClick={() => handlePriceChange('free')}>
						Free
					</Button>
					<Button active={active === 'paid'} onClick={() => handlePriceChange('paid')}>
						Paid
					</Button>
				</ButtonGroup>
			</MainContainer>
			;
		</div>
	);
};

export default PriceFilter;
