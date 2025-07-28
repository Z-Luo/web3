import axios, { AxiosRequestConfig } from 'axios';

import { DEVELOPMENT_API_URL, PRODUCTION_API_URL, UAT_API_URL } from '@/constants/apiUrl';
import { PRODUCTION, UAT } from '@/constants/env';

const getApiUrl = () => {
	const environment = process.env.NODE_ENV;
	if (environment === PRODUCTION) {
		if (process.env.NEXT_PUBLIC_NEXT_ENV === UAT) return UAT_API_URL;
		return PRODUCTION_API_URL;
	}
	return DEVELOPMENT_API_URL;
};

interface IRequest {
	method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';
	url: string;
}
export const baseURL = getApiUrl();
const timeout = 30000;

const axiosInstance = axios.create({
	baseURL,
	timeout
});

export default function request(options: AxiosRequestConfig & IRequest) {
	return axiosInstance({
		...options
	})
		.then(response => response)
		.catch(error => error);
}
