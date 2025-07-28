import React, { useEffect, useRef, useState } from 'react';

import googleMapStyles from './googleMapStyles.json';

interface EventLocationProps {
	eventCoordinates: {
		lat: number;
		lng: number;
	};
}
const EventLocation: React.FC<EventLocationProps> = ({ eventCoordinates }) => {
	const mapRef = useRef<HTMLDivElement>(null);
	const [googleMap, setGoogleMap] = useState<google.maps.Map>();

	const loadGoogleMapsScript = (callback: () => void) => {
		if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
			callback();
			return;
		}

		const script = document.createElement('script');
		script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`;
		script.async = true;
		script.defer = true;
		script.onload = callback;
		document.head.appendChild(script);
	};

	useEffect(() => {
		loadGoogleMapsScript(() => {
			if (mapRef.current && !googleMap) {
				const map = new window.google.maps.Map(mapRef.current, {
					center: eventCoordinates,
					zoom: 15,
					mapTypeControl: false,
					fullscreenControl: false,
					streetViewControl: false,
					zoomControl: false,
					gestureHandling: 'none',
					styles: googleMapStyles
				});

				setGoogleMap(map);

				const marker = new google.maps.Marker({
					position: eventCoordinates,
					map,
					icon: {
						path: 'M7.499 16S14 11.321 14 6.368C14 2.852 11.09 0 7.499 0 3.907 0 1 2.852 1 6.368 1 11.428 7.499 16 7.499 16zm0-12.548c1.364 0 2.477 1.09 2.477 2.426 0 1.337-1.113 2.426-2.477 2.426-1.365 0-2.477-1.09-2.477-2.426 0-1.337 1.112-2.426 2.477-2.426z',
						fillColor: '#52f6c6',
						fillOpacity: 1.0,
						scale: 2,
						strokeColor: '#52f6c6',
						strokeWeight: 2
					}
				});
			}
		});
	}, [eventCoordinates]);

	return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
};

export default EventLocation;
