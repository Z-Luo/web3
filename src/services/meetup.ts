import request, { baseURL } from '@/utils/request';

export const fetchMeetups = () => {
	return request({
		baseURL,
		method: 'GET',
		url: '/api/meetups?meetupEventType=web3'
	});
};
export const fetchPaginatedMeetups = (page = 1, pageSize = 12) => {
	return request({
		baseURL,
		method: 'GET',
		url: `/api/meetups?meetupEventType=web3&page=${page}&pageSize=${pageSize}`
	});
};

export const fetchMoreEvents = () => {
	return request({
		baseURL,
		method: 'GET',
		url: '/api/meetups?meetupEventType=web3&featured=default'
	});
};

export const fetchFeaturedEvents = (): Promise<{ data: { docs: IMeetup[] } }> => {
	return request({
		baseURL,
		method: 'GET',
		url: '/api/meetups?meetupEventType=web3&web3EventType=sideEvent&state=published&featured=popularEvents'
	});
};

export const fetchConventionEvents = () => {
	return request({
		baseURL,
		method: 'GET',
		url: '/api/meetups?meetupEventType=web3&web3EventType=web3AiConvention&featured=default'
	});
};
export const fetchFeaturedConventionEvents = () => {
	return request({
		baseURL,
		method: 'GET',
		url: '/api/meetups?meetupEventType=web3&web3EventType=web3AiConvention&featured=popularEvents'
	});
};
export const fetchExhibitor = (exhibitorID: string) => {
	return request({
		baseURL,
		method: 'GET',
		url: `/api/companies/${exhibitorID}`
	});
};

export const fetchEventDetails = (eventID: string) => {
	return request({
		baseURL,
		method: 'GET',
		url: `/api/meetups/${eventID}`
	});
};

export default fetchMeetups;
