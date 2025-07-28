import client from '@sendgrid/client';

import { isProd } from '@/utils/env';

if (process.env.NEXT_PUBLIC_SENDGRID_SUBSCRIPTION_API_KEY) {
	client.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_SUBSCRIPTION_API_KEY);
}

const contactListIdByEnv = isProd
	? '7f6a4e4a-f75e-443b-8b35-1c07194985af'
	: '4ff1f1a5-ea75-4d4e-9b3c-629f9212504f';

export const addSubscriptionEmail = async (email: string) => {
	return client.request({
		url: `/v3/marketing/contacts`,
		method: 'PUT',
		body: { list_ids: [contactListIdByEnv], contacts: [{ email }] }
	});
};

export const checkAddSubscriptionEmailStatus = async (jobId: string) => {
	return client.request({
		url: `/v3/marketing/contacts/imports/${jobId}`,
		method: 'GET'
	});
};

export const checkNewSubscriptionEmail = async (email: string) => {
	return client.request({
		url: `/v3/marketing/contacts/search`,
		method: 'POST',
		body: {
			query: `email = '${email}' AND CONTAINS(list_ids, '${contactListIdByEnv}')`
		}
	});
};

export default client;
