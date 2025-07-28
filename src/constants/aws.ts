import { isProd } from '@/utils/env';

const EMAIL_SERVICE_SQS_URL = isProd
	? 'https://sqs.ap-southeast-2.amazonaws.com/026559016816/prod-email-service-sqs'
	: 'https://sqs.ap-southeast-2.amazonaws.com/026559016816/uat-email-ervice-sqs';

export const EMAIL_SERVICE_TYPE = {
	WEB3_CONVENTION_SUBSCRIPTION: 'web3-convention-subscription',
	WEB3_CONVENTION_SPEAKER_APPLICATION: 'web3-convention-speaker-application'
};

export default EMAIL_SERVICE_SQS_URL;
