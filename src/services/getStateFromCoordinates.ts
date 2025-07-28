import request from '@/utils/request';

export const getStateFromCoordinates = (latitude: string, longitude: string) => {
	return request({
		method: 'GET',
		url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`
	});
};

export default getStateFromCoordinates;
