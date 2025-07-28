import request, { baseURL } from '@/utils/request';

export const fetchCitiesList = () => {
	return request({
		baseURL,
		method: 'GET',
		url: '/api/cities'
	});
};

export default fetchCitiesList;
