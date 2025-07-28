import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import React, { useState } from 'react';
import styled from 'styled-components';

import { color, devices } from '@/styles/variables';

const { primaryColor, blackColor } = color;

const InteractionSection = styled.div`
	background-color: #1a1a1a;
`;
const InteractionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	justify-content: space-between;
	@media ${devices.largeLaptop} {
		max-width: 1440px;
	}
	@media ${devices.laptop} {
		flex-direction: row;
		gap: 300px;
	}
	@media ${devices.mobile} {
		padding: 20px 200px;
	}
	padding: 10px 40px;
`;
const InteractionInfo = styled.div`
	display: flex;
	flex-direction: column;
	@media ${devices.mobile} {
		white-space: nowrap;
	}
`;
const DateInfo = styled.div`
	color: #b2b2b2;
	font-size: 16px;
`;
const EventTitle = styled.div`
	color: #fff;
	font-size: 20px;
	font-weight: bold;
	margin-top: 4px;
`;

const InteractionAction = styled.div`
	align-items: center;
	display: flex;
	gap: 15px;
	@media ${devices.mobile} {
		gap: 30px;
	}
`;
const PriceTag = styled.span`
	color: #ffbc40;
	font-family: Arial-BoldMT;
	font-size: 20px;
	@media ${devices.mobile} {
		font-size: 32px;
	}
`;

const ShareButton = styled.button`
	background-color: ${blackColor};
	border: solid 1px ${primaryColor};
	border-radius: 30px;
	color: ${primaryColor};
	font-size: 10px;
	font-weight: bold;
	height: 30px;
	width: 100px;
	@media ${devices.mobile} {
		height: 52px;
		width: 142px;
		font-size: 14px;
	}
`;
const AttendButton = styled(ShareButton)`
	background-color: ${primaryColor};
	border: unset;
	color: ${blackColor};
`;
dayjs.extend(utc);
dayjs.extend(timezone);
const format = 'dddd, MMM D, hA [GMT]Z';
interface eventDetailProps {
	eventDetail: IMeetup;
}

const Interaction: React.FC<eventDetailProps> = ({ eventDetail }) => {
	const { title, period, ticket } = eventDetail || {};
	const price = ticket?.[1]?.price;
	const [isSaved, setIsSaved] = useState(false);
	const [openSnackbar, setOpenSnackbar] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState('');

	const handleFavoriteClick = () => {
		setIsSaved(!isSaved);
		setSnackbarMessage(
			isSaved
				? 'Successfully removed from collections!'
				: 'Successfully saved to collections!'
		);
		setOpenSnackbar(true);
	};

	const handleCloseSnackbar = (event: any, reason: string) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpenSnackbar(false);
	};
	return (
		<InteractionSection>
			<InteractionWrapper>
				<InteractionInfo>
					{period?.start && (
						<DateInfo>{dayjs(period.start).utc().local().format(format)}</DateInfo>
					)}

					<EventTitle>{title}</EventTitle>
				</InteractionInfo>
				<InteractionAction>
					{price ? <PriceTag>{price}</PriceTag> : <PriceTag>Free</PriceTag>}
					{isSaved ? (
						<FavoriteIcon sx={{ color: '#f65252' }} onClick={handleFavoriteClick} />
					) : (
						<FavoriteBorderIcon sx={{ color: 'white' }} onClick={handleFavoriteClick} />
					)}
					<ShareButton>SHARE</ShareButton>
					<AttendButton>ATTEND</AttendButton>
				</InteractionAction>
			</InteractionWrapper>
			<Snackbar
				open={openSnackbar}
				autoHideDuration={3000}
				onClose={handleCloseSnackbar}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			>
				<Alert severity="success">{snackbarMessage}</Alert>
			</Snackbar>
		</InteractionSection>
	);
};

export default Interaction;
