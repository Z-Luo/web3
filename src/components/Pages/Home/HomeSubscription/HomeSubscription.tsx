import { FormControl, InputAdornment } from '@mui/material';
import Input from '@mui/material/Input';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import SubscriptionModal from '@/components/Shares/SubscriptionModal';
import useSubscription from '@/hooks/userSubscription';
import { sectionSubtitle, sectionTitle, tagDecoration } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';
import { isEmail } from '@/utils/validator';

const { blackColor, darkPrimaryColor, textColor, whiteColor, warningColor } = color;

const HomeSubscriptionContainer = styled.div`
	background: linear-gradient(180deg, ${blackColor} 70%, ${whiteColor} 30%);
	color: ${whiteColor};
	padding: 100px 30px 50px;
	@media ${devices.mobile} {
		padding: 100px 100px 50px;
	}
`;

const Content = styled.div`
	margin: 0 auto;
	max-width: 1300px;
	position: relative;
`;

const Subtitle = styled.p`
	${sectionSubtitle};
	margin-bottom: 0;
`;

const Title = styled.h2`
	${sectionTitle};
	color: ${whiteColor};
	@media ${devices.tablet} {
		font-size: 40px;
	}
`;

const InputContainer = styled.div`
	background-color: ${whiteColor};
	box-shadow: 0 5px 21px 0 rgb(83 246 198 / 37%);
	padding: 20px 0;
`;

const StyledInput = styled(Input)`
	color: ${textColor};
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
		border-bottom: none;
		border-radius: 0;
		border-right: 2px solid ${darkPrimaryColor};
		padding: 30px 0 30px 30px;
	}
`;

const StyledInputAdornment = styled(InputAdornment)`
	height: fit-content;
	margin-left: 0;
`;

const StyledButton = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	font-size: 14px;
	font-weight: 700;
	padding: 20px 16px;
	&:hover span {
		color: ${darkPrimaryColor};
	}
	span {
		-moz-transition: color 0.5s;
		-webkit-transition: color 0.5s;
		${tagDecoration};
		color: ${blackColor};
		text-transform: uppercase;
		transition: color 0.5s;
	}
	@media ${devices.tablet} {
		font-size: 16px;
		padding: 40px 60px;
	}
`;

const EmailHelperText = styled.p`
	color: ${warningColor};
	font-size: 14px;
	margin-left: 0;
	margin-top: 10px;
	position: absolute;
`;

const HomeSubscription: React.FC = () => {
	const [emailInput, setEmailInput] = useState<string>('');
	const [inputMessage, setInputMessage] = useState<string>('');
	const { message, openModal, setOpenModal, submitEmail } = useSubscription(
		emailInput,
		setEmailInput
	);

	useEffect(() => {
		if (inputMessage) setInputMessage('');
	}, [emailInput]);

	const handleSubmitEmail = async () => {
		if (!isEmail(emailInput)) {
			setInputMessage('Email is invalid. Please update your email.');
		} else {
			submitEmail();
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
		if (e.key === 'Enter') {
			handleSubmitEmail();
		}
	};

	const handleClose = () => {
		setOpenModal(false);
	};

	return (
		<HomeSubscriptionContainer>
			<Content>
				<Subtitle>{`Don't miss`}</Subtitle>
				<Title>Keep you posted!</Title>
				<InputContainer>
					<FormControl fullWidth>
						<StyledInput
							placeholder="_Your Email"
							value={emailInput}
							onChange={event => setEmailInput(event.target.value)}
							endAdornment={
								<StyledInputAdornment position="end">
									<StyledButton onClick={handleSubmitEmail}>
										<span>Send</span>
									</StyledButton>
								</StyledInputAdornment>
							}
							onFocus={() => setInputMessage('')}
							onKeyDown={handleKeyPress}
						/>
					</FormControl>
				</InputContainer>
				{inputMessage && <EmailHelperText>{inputMessage}</EmailHelperText>}
				<SubscriptionModal message={message} open={openModal} handleClose={handleClose} />
			</Content>
		</HomeSubscriptionContainer>
	);
};

export default HomeSubscription;
