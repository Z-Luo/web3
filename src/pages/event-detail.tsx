import React from 'react';
import styled from 'styled-components';

// import EventDetailContent from '@/components/Pages/EventDetail/EventDetailContent';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import PageHead from '@/layouts/PageHead';

const Cover = styled.div`
	background-color: black;
	background-repeat: no-repeat;
	background-size: cover;
`;
const EventDetailPage = () => {
	return (
		<>
			<PageHead />
			<Cover>
				<Header />
			</Cover>
			{/* <EventDetailContent /> */}
			<Footer />
		</>
	);
};

export default EventDetailPage;
