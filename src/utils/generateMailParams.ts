import EMAIL_SERVICE_SQS_URL from '@/constants/aws';

interface GenerateMailParams {
	templateValue: string;
	toValue: string;
	htmlValue: string;
	paramsValue?: string;
	message: string;
	subject?: string;
}

const generateMailParams = ({
	templateValue,
	toValue,
	htmlValue,
	paramsValue = '{}',
	message,
	subject
}: GenerateMailParams) => {
	return {
		DelaySeconds: 10,
		MessageAttributes: {
			template: {
				DataType: 'String',
				StringValue: templateValue
			},
			to: {
				DataType: 'String',
				StringValue: toValue
			},
			html: {
				DataType: 'String',
				StringValue: htmlValue
			},
			params: {
				DataType: 'String',
				StringValue: paramsValue
			},
			...(subject
				? {
						subject: {
							DataType: 'String',
							StringValue: subject
						}
				  }
				: {})
		},
		MessageBody: message,
		QueueUrl: EMAIL_SERVICE_SQS_URL
	};
};

export default generateMailParams;
