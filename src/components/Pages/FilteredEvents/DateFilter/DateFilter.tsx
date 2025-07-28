// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import RemoveIcon from '@mui/icons-material/Remove';
// import { Typography } from '@mui/material';
// import { addDays, addMonths, endOfMonth, endOfWeek, startOfMonth, startOfWeek } from 'date-fns';
// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import styled, { createGlobalStyle } from 'styled-components';
// import 'react-datepicker/dist/react-datepicker.css';

// import { color } from '@/styles/variables';

// const { whiteColor, primaryColor, buttonBackgroundColor, inputTextColor } = color;
// const MainContainer = styled.div`
// 	margin-top: 60px;
// 	width: 100%;
// `;

// const StyledTypography = styled(Typography)`
// 	color: ${whiteColor};
// 	font-size: 18px;
// 	font-weight: bold;
// `;

// interface ButtonProps {
// 	isActive: boolean;
// }
// const Button = styled.button<ButtonProps>`
// 	background-color: ${buttonBackgroundColor};
// 	border: solid 1px ${({ isActive }) => (isActive ? primaryColor : 'transparent')};
// 	border-radius: 18px;
// 	color: ${({ isActive }) => (isActive ? primaryColor : whiteColor)};
// 	cursor: pointer;
// 	font-size: 16px;
// 	height: 36px;
// 	margin-bottom: 16px;
// 	margin-right: 16px;
// 	padding: 6px 20px;
// `;

// const ButtonGroup = styled.div`
// 	margin-top: 16px;
// `;

// const DatePickerContainer = styled.div`
// 	align-items: center;
// 	background-color: ${buttonBackgroundColor};
// 	border-radius: 18px;
// 	display: flex;
// 	height: 36px;
// 	padding: 6px 12px;
// `;

// const DateInput = styled.input`
// 	background-color: transparent;
// 	border: none;
// 	color: ${inputTextColor};
// 	font-size: 16px;
// 	letter-spacing: 1px;
// 	line-height: 1.5;
// 	text-align: center;
// 	width: 100%;
// 	&:focus {
// 		outline: none;
// 	}
// `;

// const GlobalStyles = createGlobalStyle`
//   .react-datepicker__month-container,
//   .react-datepicker__header {
//     background-color: ${buttonBackgroundColor};
//   }
//   .react-datepicker__day,
//   .react-datepicker__day-name,
//   .react-datepicker__current-month {
//     color: ${inputTextColor};
//   }
//   .react-datepicker__day--selected,
//   .react-datepicker__day--in-selecting-range,
//   .react-datepicker__day--in-range {
//     background-color: ${primaryColor};
//     color: ${whiteColor};
//   }
// `;

// const StyledCalendarTodayIcon = styled(CalendarTodayIcon)`
// 	color: ${inputTextColor};
// 	font-size: 16px;
// 	margin-left: 7px;
// `;

// const StyledRemoveIcon = styled(RemoveIcon)`
// 	color: ${whiteColor};
// 	font-size: 8px;
// `;
// const ApplyButton = styled.button`
// 	background-color: ${buttonBackgroundColor};
// 	border: none;
// 	color: ${whiteColor};
// 	cursor: pointer;
// 	font-size: 16px;
// 	height: 100%;
// 	margin: 10px 6px;
// `;

// enum DateButtonType {
// 	TODAY = 'today',
// 	TOMORROW = 'tomorrow',
// 	THIS_WEEK = 'thisWeek',
// 	THIS_MONTH = 'thisMonth',
// 	NEXT_MONTH = 'nextMonth',
// 	CUSTOM = 'custom'
// }

// interface ButtonConfig {
// 	id: DateButtonType;
// 	text: string;
// }
// const BUTTONS: ButtonConfig[] = [
// 	{ id: DateButtonType.TODAY, text: 'Today' },
// 	{ id: DateButtonType.TOMORROW, text: 'Tomorrow' },
// 	{ id: DateButtonType.THIS_WEEK, text: 'This week' },
// 	{ id: DateButtonType.THIS_MONTH, text: 'This month' },
// 	{ id: DateButtonType.NEXT_MONTH, text: 'Next month' },
// 	{ id: DateButtonType.CUSTOM, text: 'Custom' }
// ];

// interface DateFilterProps {
// 	onDateChange: (startDate: Date, endDate: Date) => void;
// }

// const DateFilter: React.FC<DateFilterProps> = ({ onDateChange }) => {
// 	const [showDatePicker, setShowDatePicker] = useState(false);
// 	const [activeButton, setActiveButton] = useState<DateButtonType | undefined>();
// 	const [startDate, setStartDate] = useState<Date | null>(null);
// 	const [endDate, setEndDate] = useState<Date | null>(null);
// 	const handleDateChange = (newStartDate: Date, newEndDate: Date) => {
// 		onDateChange(newStartDate, newEndDate);
// 	};

// 	const handleButtonClick = (buttonId: DateButtonType) => {
// 		setActiveButton(buttonId);
// 		let newStartDate: Date | null = new Date();
// 		let newEndDate: Date | null = new Date();

// 		switch (buttonId) {
// 			case DateButtonType.TODAY:
// 				newStartDate.setHours(0, 0, 0, 0);
// 				newEndDate.setHours(23, 59, 59, 999);
// 				break;
// 			case DateButtonType.TOMORROW:
// 				newStartDate = addDays(newStartDate, 1);
// 				newStartDate.setHours(0, 0, 0, 0);
// 				newEndDate = addDays(newEndDate, 1);
// 				newEndDate.setHours(23, 59, 59, 999);
// 				break;
// 			case DateButtonType.THIS_WEEK:
// 				newStartDate = startOfWeek(newStartDate, { weekStartsOn: 1 });
// 				newEndDate = endOfWeek(newEndDate, { weekStartsOn: 1 });
// 				break;
// 			case DateButtonType.THIS_MONTH:
// 				newStartDate = startOfMonth(newStartDate);
// 				newEndDate = endOfMonth(newEndDate);
// 				break;
// 			case DateButtonType.NEXT_MONTH:
// 				newStartDate = startOfMonth(addMonths(newStartDate, 1));
// 				newEndDate = endOfMonth(addMonths(newEndDate, 1));
// 				break;
// 			case DateButtonType.CUSTOM:
// 				setShowDatePicker(!showDatePicker);
// 				return;

// 			default:
// 				newStartDate = null;
// 				newEndDate = null;
// 				break;
// 		}
// 		if (newStartDate && newEndDate) {
// 			handleDateChange(newStartDate, newEndDate);
// 		}
// 	};

// 	const handleCustomDateApply = () => {
// 		if (startDate && endDate) {
// 			setShowDatePicker(false);
// 			handleDateChange(startDate, endDate);
// 		}
// 	};
// 	return (
// 		<MainContainer>
// 			<StyledTypography>Date</StyledTypography>
// 			<ButtonGroup>
// 				{BUTTONS.map(button => (
// 					<Button
// 						key={button.id}
// 						isActive={activeButton === button.id}
// 						onClick={() => {
// 							setActiveButton(button.id);
// 							if (button.id === DateButtonType.CUSTOM) {
// 								setShowDatePicker(!showDatePicker);
// 							} else {
// 								setShowDatePicker(false);
// 								handleButtonClick(button.id);
// 							}
// 						}}
// 					>
// 						{button.text}
// 					</Button>
// 				))}
// 			</ButtonGroup>
// 			<GlobalStyles />
// 			{showDatePicker && (
// 				<DatePickerContainer>
// 					<StyledCalendarTodayIcon />
// 					<DatePicker
// 						selected={startDate}
// 						onChange={date => setStartDate(date)}
// 						customInput={<DateInput />}
// 					/>
// 					<StyledRemoveIcon />
// 					<DatePicker
// 						selected={endDate}
// 						onChange={date => setEndDate(date)}
// 						customInput={<DateInput />}
// 					/>
// 					<ApplyButton onClick={handleCustomDateApply}>Apply</ApplyButton>
// 				</DatePickerContainer>
// 			)}
// 		</MainContainer>
// 	);
// };

// export default DateFilter;
