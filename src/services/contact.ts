import request, { baseURL } from '@/utils/request';

export const sendContactForm = async (data: object) => {
	return request({
		baseURL,
		url: '/api/contact',
		method: 'POST',
		data: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	});
};

export default sendContactForm;
