import { SendMessageCommand } from '@aws-sdk/client-sqs';
import { SetStateAction, useState } from 'react';

import { EMAIL_SERVICE_TYPE } from '@/constants/aws';
import {
	addSubscriptionEmail,
	checkAddSubscriptionEmailStatus,
	checkNewSubscriptionEmail
} from '@/services/sendGrid';
import sqsClient from '@/services/sqs';
import generateMailParams from '@/utils/generateMailParams';

const useSubscription = (
	emailInput: string,
	setEmailInput: React.Dispatch<SetStateAction<string>>
) => {
	const [message, setMessage] = useState<IMessage>();
	const [openModal, setOpenModal] = useState<boolean>(false);

	const submitEmail = async () => {
		// Check whether the email has been subscripted
		const checkResponse = await checkNewSubscriptionEmail(emailInput);

		if (checkResponse[0].statusCode === 200) {
			if (checkResponse[1].contact_count === 0) {
				// The email is not in the subscription list and add to subscription list
				const addEmailResponse = await addSubscriptionEmail(emailInput);

				if (addEmailResponse[0].statusCode === 202) {
					if (addEmailResponse[1].job_id) {
						// Check the job status of adding the email to contact list
						const checkAddEmailStatusResponse = await checkAddSubscriptionEmailStatus(
							addEmailResponse[1].job_id
						);
						if (
							checkAddEmailStatusResponse[0].statusCode === 200 &&
							checkAddEmailStatusResponse[1].status !== 'errored' &&
							checkAddEmailStatusResponse[1].status !== 'failed'
						) {
							setMessage({
								type: 'success',
								message: 'Subscription successfully!'
							});
							setOpenModal(true);
							setEmailInput('');
							// Send email
							const mailParams = generateMailParams({
								templateValue: EMAIL_SERVICE_TYPE.WEB3_CONVENTION_SUBSCRIPTION,
								toValue: emailInput,
								htmlValue: 'web3-convention-subscription.js',
								message: 'Web3 convention subscription Email'
							});
							sqsClient.send(new SendMessageCommand(mailParams));
						}
					}
				} else {
					setMessage({
						type: 'error',
						message: 'Subscription failed. Please try again later.'
					});
					setOpenModal(true);
				}
			} else {
				setMessage({
					type: 'info',
					message: 'Your have already subscripted.'
				});
				setOpenModal(true);
			}
		} else {
			setMessage({
				type: 'error',
				message: 'Check subscription status failed. Please try again later.'
			});
			setOpenModal(true);
		}
	};

	return { message, openModal, setOpenModal, submitEmail };
};

export default useSubscription;
