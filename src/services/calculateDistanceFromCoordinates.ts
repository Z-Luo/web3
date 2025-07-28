import request, { baseURL } from '@/utils/request';

export const calculateDistanceFromCoordinates = (
	originCoordinates: { lat: number; lng: number },
	destinationCoordinates: { lat: number; lng: number }
) => {
	return request({
		baseURL,
		method: 'GET',
		url: `/api/calculateDistance?originLat=${originCoordinates.lat}&originLng=${originCoordinates.lng}&destLat=${destinationCoordinates.lat}&destLng=${destinationCoordinates.lng}`
	});
};

export default calculateDistanceFromCoordinates;
