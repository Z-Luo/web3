import { SQSClient } from '@aws-sdk/client-sqs';

const REGION = process.env.NEXT_PUBLIC_AWS_REGION;

const sqsClient = new SQSClient({
	region: REGION,
	credentials: {
		accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || '',
		secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || ''
	}
});

export default sqsClient;
