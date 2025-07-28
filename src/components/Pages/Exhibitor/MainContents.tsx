import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import ExhibitorDetailedInformation from './ExhibitorDetailedInformation';
import { IExhibitor } from '@/interfaces/exhibitor';
import fetchExhibitorById from '@/services/companies';
import { color } from '@/styles/variables';

const { blackColor } = color;

const Container = styled.div`
	background-color: ${blackColor};
`;

const MainContents = () => {
	const router = useRouter();
	const { exhibitorId } = router.query;
	const [exhibitorInfo, setExhibitorInfo] = useState<IExhibitor | null>(null);
	const fetchData = async (): Promise<void> => {
		if (router.isReady) {
			const response = await fetchExhibitorById(exhibitorId as string);
			setExhibitorInfo(response.data);
		}
	};

	useEffect(() => {
		fetchData();
	}, [router.isReady]);
	return (
		<Container>
			{exhibitorInfo && <ExhibitorDetailedInformation exhibitorInfo={exhibitorInfo} />}
		</Container>
	);
};

export default MainContents;
