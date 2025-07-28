import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ShowMessageModal from '../ShowMessageModal';

import ThemeButton from '@/components/Shares/ThemeButton';
import sendContactForm from '@/services/contact';
import { color, devices, sizes } from '@/styles/variables';
import imageLoader from '@/utils/loader';
import { isEmail } from '@/utils/validator';

const { whiteColor, formTextColor, blackColor } = color;

const Section = styled.section`
	background-color: ${blackColor};
	color: ${whiteColor};
	display: flex;
	justify-content: center;
	width: 100%;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 36px;
	max-width: 1440px;
	padding: 24px 20px;
	padding: 24px;
	width: calc(100vw - 40px);
	@media ${devices.mobile} {
		padding: 24px 110px;
	}
`;
const FormContainer = styled.div`
	color: ${formTextColor};
	display: flex;
	flex-direction: column;
	@media ${devices.laptop} {
		flex-direction: row;
	}
`;
const DescriptionText = styled.p`
	font-size: 16px;
	line-height: 1.5;
	text-align: justify;
	width: 100%;
	@media ${devices.tablet} {
		width: 420px;
	}
	@media ${devices.largeLaptop} {
		width: 600px;
	}
`;
const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-bottom: 20px;
	@media ${devices.tablet} {
		width: 420px;
	}
	@media ${devices.largeLaptop} {
		width: 600px;
	}
`;

const Title = styled.h2`
	font-size: 20px;
	font-weight: bold;
`;
const StyledImg = styled.div`
	height: auto;
	margin-top: 30px;
	@media ${devices.laptop} {
		margin-left: 156px;
		margin-top: 40px;
	}
`;
interface InputProps {
	hasError?: boolean;
}
const Input = styled.input<InputProps>`
	background-color: transparent;
	border: none;
	border-bottom: 1px solid ${({ hasError }) => (hasError ? '#d14d4d' : '#999999')};
	color: ${whiteColor};
	font-size: 16px;
	margin-top: 30px;
	padding: 10px 0;
	&::placeholder {
		color: ${formTextColor};
	}
	&:focus {
		border-bottom-color: ${({ hasError }) => (hasError ? '#d14d4d' : whiteColor)};
		outline: none;
	}
`;

const TextArea = styled.textarea`
	background: transparent;
	border: solid 0.5px ${formTextColor};
	border-radius: 2px;
	color: ${whiteColor};
	font-size: 16px;
	margin-bottom: 20px;
	padding: 10px;
	&::placeholder {
		color: ${formTextColor};
		font-size: 16px;
		opacity: 1;
	}
	&:focus {
		border-color: ${whiteColor};
		outline: none;
	}
`;

const MessageText = styled.p`
	color: ${formTextColor};
	font-size: 16px;
	margin: 40px 0 0 0;
`;

const Select = styled.select`
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background: transparent;
	border: none;
	border-bottom: 1px solid ${formTextColor};
	color: inherit;
	font-size: 16px;
	margin-top: 20px;
	padding: 10px 0;
	&:focus {
		border-bottom-color: ${whiteColor};
		outline: none;
	}
	&::-ms-expand {
		display: none;
	}
	&::placeholder {
		color: ${formTextColor};
		font-size: 16px;
	}
`;

const ErrorMessage = styled.div`
	color: #d14d4d;
	font-size: 12px;
`;

const SuccessBox = styled.div`
	font-weight: bold;
	margin-left: 12px;
`;

const ContactTable = () => {
	const initValues = {
		firstName: '',
		lastName: '',
		organisationName: '',
		email: '',
		subject: '',
		message: ''
	};
	const initState = { values: initValues };
	const [state, setState] = useState(initState);
	const [email, setEmail] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [emailError, setEmailError] = useState('');
	const [open, setOpen] = useState(false);
	const [imageSize, setImageSize] = useState({ width: 429, height: 520 });

	useEffect(() => {
		const handleResize = () => {
			const mobileWidth = window.innerWidth < sizes.mobile ? 270 : 429;
			const mobileHeight = window.innerWidth < sizes.mobile ? 330 : 520;
			setImageSize({ width: mobileWidth, height: mobileHeight });
		};
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const { values } = state;

	const handleClose = () => {
		setTimeout(() => {
			setOpen(false);
		}, 3000);
	};

	const handleChange = ({
		target
	}: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
		setState(prev => ({
			...prev,
			values: {
				...prev.values,
				[target.name]: target.value
			}
		}));
		if (target.name === 'email') {
			setEmail(target.value);
			if (!isEmail(target.value)) {
				setEmailError('Please enter a valid email address.');
			} else {
				setEmailError('');
			}
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		await sendContactForm(values);
		setIsLoading(false);
		setOpen(true);
		handleClose();
	};

	return (
		<Section>
			<Container>
				<Title>How can we help you?</Title>
				<DescriptionText>
					This moment marks the inception of an exhilarating journey as AI + Web3
					Convention unfolds.
					<br />
					For any inquiries, please take advantage of the contact form below. Rest
					assured, we&apos;ll promptly address your queries.
					<p>
						Information:{' '}
						<a href="mailto:info@web3convention.com">info@web3convention.com</a>
					</p>
					<p>
						Partnership:{' '}
						<a href="mailto:business@web3convention.com">business@web3convention.com</a>
					</p>
				</DescriptionText>
				<FormContainer>
					<ContactForm onSubmit={handleSubmit}>
						<Input
							name="firstName"
							type="text"
							value={values.firstName}
							placeholder="First Name *"
							required
							onChange={handleChange}
						/>
						<Input
							name="lastName"
							type="text"
							value={values.lastName}
							placeholder="Last Name *"
							required
							onChange={handleChange}
						/>
						<Input
							name="organisationName"
							type="text"
							value={values.organisationName}
							placeholder="Organisation Name"
							onChange={handleChange}
						/>
						<Input
							name="email"
							type="email"
							placeholder="Email *"
							required
							value={email}
							onChange={handleChange}
							hasError={!!emailError}
						/>
						{emailError && <ErrorMessage>{emailError}</ErrorMessage>}
						<Select
							defaultValue=""
							value={values.subject}
							name="subject"
							onChange={handleChange}
							required
						>
							<option value="" disabled hidden>
								Subject of Enquiry *
							</option>
							<option value="General Enquiries">General Enquiries</option>
							<option value="Tickets">Tickets</option>
							<option value="Programming">Programming</option>
							<option value="Sponsorship">Sponsorship</option>
							<option value="Partnership">Partnership</option>
							<option value="Community Partner">Community Partner</option>
							<option value="Media Partner">Media Partner</option>
						</Select>
						<MessageText>Message *</MessageText>
						<TextArea
							name="message"
							placeholder="Type Something..."
							value={values.message}
							onChange={handleChange}
							required
							rows={15}
						/>
						<ThemeButton width="180px" disabled={isLoading}>
							SUBMIT
						</ThemeButton>
					</ContactForm>
					<StyledImg>
						<Image
							src="/images/demo/contactUsPage/form-image.png"
							alt="picture next to contact form"
							width={imageSize.width}
							height={imageSize.height}
							loader={imageLoader}
						/>
					</StyledImg>
				</FormContainer>
				<ShowMessageModal open={open} handleClose={handleClose}>
					<Image
						src="/icons/success-icon.svg"
						alt="success icon"
						width={20}
						height={20}
						loader={imageLoader}
					/>
					<SuccessBox>
						Thank you for reaching out. We have received your email. Our specialist team
						will respond to your inquiry as soon as possible.
					</SuccessBox>
				</ShowMessageModal>
			</Container>
		</Section>
	);
};

export default ContactTable;
