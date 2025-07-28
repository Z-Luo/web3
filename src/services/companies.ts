import request, { baseURL } from '@/utils/request';

export const fetchExhibitorById = (exhibitorId: string) => {
	return request({
		baseURL,
		method: 'GET',
		url: `/api/companies/${exhibitorId}`
	});
};

export default fetchExhibitorById;
