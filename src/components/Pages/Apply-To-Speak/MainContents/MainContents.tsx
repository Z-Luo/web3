import { SendMessageCommand } from '@aws-sdk/client-sqs';
import { Checkbox, FormControl, FormControlLabel, MenuItem, TextField } from '@mui/material';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

import renderFormControl from './components/RenderFormControl';
import { formControlsJobData, formControlsSpeakerData } from './form-controls-data';
import ApplicationModal from '@/components/Shares/ApplicationModal/ApplicationModal';
import ThemeButton from '@/components/Shares/ThemeButton';
import { DATE_OPTIONS } from '@/constants/apply-to-speak-dates';
import { EMAIL_SERVICE_TYPE } from '@/constants/aws';
import useHandleInputChange from '@/hooks/useHandleInputChange';
import sqsClient from '@/services/sqs';
import { color, devices, inputColor, sizes } from '@/styles/variables';
import generateMailParams from '@/utils/generateMailParams';
import hasEmptyValues from '@/utils/hasEmptyValues';
import imageLoader from '@/utils/loader';

const { blackColor, darkPrimaryColor } = color;
const { formLabelColor } = inputColor;

type TextFieldProps = MuiTextFieldProps & {
	customColor?: string;
};

const ApplyToSpeakContainer = styled.div`
	background-color: ${blackColor};
	color: ${formLabelColor};
	display: flex;
	justify-content: center;
	@media ${devices.miniMobile} {
		padding: 18px 24px;
	}
`;
const Wrapper = styled.div`
	display: flex;
	max-width: ${`${sizes.largeLaptop}px`};
	width: 100%;
	@media ${devices.Mobile} {
		flex-direction: column;
	}
	@media ${devices.largeLaptop} {
		flex-direction: row;
	}
`;

const Logo = styled(Image)`
	height: auto;
	opacity: 0.2;

	@media ${devices.miniMobile} {
		width: 100%;
		padding-left: 0;
		margin-top: 48px;
	}
	@media ${devices.largeLaptop} {
		padding-left: 134px;
		width: 50%;
		padding-bottom: 108px;
	}
`;

const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const FormContainer = styled.div`
	display: grid;
	margin-bottom: 80px;
	@media ${devices.largeLaptop} {
		gap: 32px;
		grid-auto-rows: auto;
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${devices.miniMobile} {
		gap: 15px;
		grid-auto-rows: auto;
	}
`;
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
const StyleSelect = styled(TextField)<TextFieldProps>`
	color: ${formLabelColor};
	margin: 0 0 36px;
	padding: 7px 0;

	& .MuiInputBase-input {
		color: ${formLabelColor};
	}
	.MuiInput-underline:after {
		border-bottom: 1px solid ${darkPrimaryColor};
	}
	& .MuiInput-underline:before {
		border-bottom-color: ${formLabelColor};
	}
	&:hover .MuiInput-underline:not(.Mui-disabled):before {
		border-bottom: 1px solid ${darkPrimaryColor};
	}
`;
const StyleMenu = styled(MenuItem)`
	color: ${formLabelColor};
`;

const StyledCheckBox = styled(FormControlLabel)`
	@media ${devices.miniMobile} {
		font-size: 12px;
		line-height: 1.5;
	}
	margin: -13px 0 75px;
	& .MuiCheckbox-root {
		color: ${formLabelColor};
	}

	& .Mui-checked {
		color: ${darkPrimaryColor};
	}
`;

const ButtonContainer = styled.div`
	@media ${devices.largeLaptop} {
		width: 180px;
	}
`;

const MainContents: React.FC = () => {
	const { state: speakerData, handleInputChange } = useHandleInputChange({
		date: '18 May 2024',
		firstName: '',
		lastName: '',
		email: '',
		countryCode: '',
		mobileNumber: '',
		jobTitle: '',
		companyName: '',
		companyBio: '',
		speakerBio: '',
		speechTopic: '',
		agreeToTerms: false
	});
	const [message, setMessage] = useState('error');
	const [openModal, setOpenModal] = useState(false);
	const handleSelectChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		event.preventDefault();
		const { name, value } = event.target;
		handleInputChange({ target: { name, value } } as React.ChangeEvent<HTMLInputElement>);
	};

	const handleClose = () => {
		setOpenModal(false);
		setMessage('error');
	};

	const submitHandle = async () => {
		if (hasEmptyValues(speakerData) || !speakerData.agreeToTerms) {
			setMessage('error');
			setOpenModal(true);
		} else {
			setMessage('success');
			setOpenModal(true);
			// Send Email
			const mailParams = generateMailParams({
				templateValue: EMAIL_SERVICE_TYPE.WEB3_CONVENTION_SPEAKER_APPLICATION,
				toValue: speakerData.email,
				htmlValue: 'Web3 Convention Speakers Team',
				message:
					'Thank you for proposing a speaker for Web Summit 2023. We will review your application and get back in touch if we find a good fit.'
			});
			await sqsClient.send(new SendMessageCommand(mailParams));
		}
	};

	return (
		<ApplyToSpeakContainer>
			<Wrapper>
				<FormWrapper>
					<FormControl>
						<FormLabel>Date:</FormLabel>
						<StyleSelect
							name="date"
							value={speakerData.date}
							onChange={handleSelectChange}
							select
							variant="standard"
						>
							{DATE_OPTIONS.map(option => (
								<StyleMenu key={option.value} value={option.value}>
									{option.label}
								</StyleMenu>
							))}
						</StyleSelect>
					</FormControl>
					<FormContainer>
						{formControlsSpeakerData.map(control =>
							renderFormControl(
								control,
								control.labelText === 'First Name:' ||
									control.labelText === 'Last Name:' ||
									control.labelText === 'Country Code:' ||
									control.labelText === 'Mobile Number:'
							)
						)}
					</FormContainer>

					{formControlsJobData.map(control => renderFormControl(control, false))}

					<FormControl>
						<StyledCheckBox
							control={
								<Checkbox
									checked={speakerData.agreeToTerms}
									name="agreeToTerms"
									onChange={handleInputChange}
									required
								/>
							}
							label="I have read and agree to abide by the Terms and Conditions"
						/>
					</FormControl>
					<ButtonContainer>
						<ThemeButton onClick={submitHandle} width="100%">
							Submit
						</ThemeButton>
					</ButtonContainer>
				</FormWrapper>
				<Logo
					loader={imageLoader}
					unoptimized
					src="/web3-logo-white.svg"
					alt="logo"
					width={140}
					height={40}
					priority
				/>
			</Wrapper>
			<ApplicationModal open={openModal} handleClose={handleClose} message={message} />
		</ApplyToSpeakContainer>
	);
};

export default MainContents;
