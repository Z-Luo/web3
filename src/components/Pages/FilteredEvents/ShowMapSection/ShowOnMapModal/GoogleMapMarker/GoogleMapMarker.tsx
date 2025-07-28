import React, { useEffect, useRef, useState } from 'react';

import googleMapStyles from './googleMapStyles.json';
import fetchMeetups from '@/services/meetup';

interface GoogleMapProps {
	events: IMeetup[];
	activeEventId?: string;
	onEventsFiltered: (filteredEvents: IMeetup[]) => void;
}

const GoogleMapMarker: React.FC<GoogleMapProps> = ({ events, activeEventId, onEventsFiltered }) => {
	const mapRef = useRef<HTMLDivElement>(null);
	const [googleMap, setGoogleMap] = useState<google.maps.Map>();
	const markersRef = useRef<google.maps.Marker[]>([]);

	const fetchAndFilterEvents = async () => {
		const response = await fetchMeetups();
		const meetupData = response.data.docs || [];

		if (googleMap) {
			const bounds = googleMap.getBounds();
			const filteredByBounds = meetupData.filter((event: IMeetup) => {
				const eventPos = new google.maps.LatLng(event.latitude, event.longitude);
				return bounds ? bounds.contains(eventPos) : false;
			});

			onEventsFiltered(filteredByBounds);
		}
	};

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

	// eslint-disable-next-line consistent-return
	useEffect(() => {
		if (googleMap) {
			googleMap.addListener('dragend', fetchAndFilterEvents);
			googleMap.addListener('zoom_changed', fetchAndFilterEvents);

			fetchAndFilterEvents();

			return () => {
				google.maps.event.clearInstanceListeners(googleMap);
			};
		}
	}, [googleMap]);

	useEffect(() => {
		loadGoogleMapsScript(() => {
			if (mapRef.current && !googleMap) {
				const map = new window.google.maps.Map(mapRef.current, {
					center: { lat: events[0]?.latitude || 0, lng: events[0]?.longitude || 0 },
					zoom: 8,
					mapTypeControl: false,
					fullscreenControl: false,
					streetViewControl: false,
					styles: googleMapStyles
				});

				setGoogleMap(map);
			}
		});
	}, [events]);

	useEffect(() => {
		if (googleMap) {
			markersRef.current.forEach(marker => marker.setMap(null));
			markersRef.current = [];

			events.forEach(event => {
				const marker = new google.maps.Marker({
					position: { lat: event.latitude, lng: event.longitude },
					map: googleMap,
					title: event.title,
					icon: {
						path: 'M7.499 16S14 11.321 14 6.368C14 2.852 11.09 0 7.499 0 3.907 0 1 2.852 1 6.368 1 11.428 7.499 16 7.499 16zm0-12.548c1.364 0 2.477 1.09 2.477 2.426 0 1.337-1.113 2.426-2.477 2.426-1.365 0-2.477-1.09-2.477-2.426 0-1.337 1.112-2.426 2.477-2.426z',
						fillColor: '#52f6c6',
						fillOpacity: 1.0,
						scale: 2,
						strokeColor: '#52f6c6',
						strokeWeight: 2
					}
				});

				markersRef.current.push(marker);
			});
		}
	}, [events, googleMap]);

	useEffect(() => {
		if (activeEventId && googleMap) {
			const activeEvent = events.find(event => event._id === activeEventId);
			if (activeEvent) {
				googleMap.panTo({ lat: activeEvent.latitude, lng: activeEvent.longitude });
				googleMap.setZoom(14);
			}
		}
	}, [activeEventId, events, googleMap]);

	return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
};

export default GoogleMapMarker;
