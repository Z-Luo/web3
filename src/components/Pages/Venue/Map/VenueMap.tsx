import { Status, Wrapper } from '@googlemaps/react-wrapper';
import React, { useEffect, useRef, useState } from 'react';

import Marker from '@/components/Pages/Venue/Map/Marker';

interface MapProps extends google.maps.MapOptions {
	children?: React.ReactNode;
}

const GoogleMap: React.FC<MapProps> = props => {
	const { children, center, zoom } = props;
	const ref = useRef<HTMLDivElement>(null);
	const [map, setMap] = useState<google.maps.Map>();

	useEffect(() => {
		if (ref.current && !map) {
			setMap(
				new window.google.maps.Map(ref.current, {
					center,
					zoom
				})
			);
		}
	}, [ref, map]);
	return (
		<>
			<div ref={ref} style={{ height: '60vh', width: '100%' }} />
			{React.Children.map(children, child => {
				if (React.isValidElement(child)) {
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					return React.cloneElement<google.maps.Map | any>(child, { map });
				}
				return null;
			})}
		</>
	);
};

const VenueMap = () => {
	const render = (status: Status) => {
		return <h1>{status}</h1>;
	};
	const position = { lat: -27.476389, lng: 153.018333 };
	return (
		<Wrapper apiKey="AIzaSyDCKxgat91L8LiFigmKSwlcuO1_IUoBR5g" render={render}>
			<GoogleMap center={position} zoom={17}>
				<Marker position={position} clickable={false} />
			</GoogleMap>
		</Wrapper>
	);
};

export default VenueMap;
