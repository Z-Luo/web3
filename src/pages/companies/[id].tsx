import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import ExhibitorAvatar from '@/components/Shares/ExhibitorAvatar';
import ExhibitorIcon from '@/components/Shares/ExhibitorIcon';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import { fetchExhibitor } from '@/services/meetup';
import { color, devices } from '@/styles/variables';

const auIcon = '/images/icons/aus.svg';

const Container = styled.div`
	background-color: ${color.blackColor};
	display: flex;
	flex-direction: column;
	padding: 24px;
	width: 100%;
`;
const ExhibitorContainer = styled.div`
	align-items: center;
	border-bottom: 2px solid #2a2a2a;
	display: flex;
	gap: 10px;
	justify-content: flex-start;
	padding: 40px 0;
	@media ${devices.mobile} {
		gap: 20px;
	}
`;
const ExhibitorName = styled.p`
	color: ${color.whiteColor};
	font-size: 32px;
	font-weight: bold;
`;
const ExhibitorCountry = styled.div`
	height: 28px;
	width: 28px;
	img {
		border-radius: 50%;
		height: 100%;
		width: auto;
	}
`;

const ExhibitorWrapper = styled.div`
	margin: 0 auto 50px;
	max-width: 1200px;
	width: 100%;
	@media ${devices.mobile} {
		margin: 0 auto 250px;
	}
`;
const ExhibitorInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin: 48px 0 0 0;
`;
const ExhibitorImageWrapper = styled.div`
	display: flex;
	max-height: 364px;
	width: 100%;
	img {
		flex-shrink: 1;
	}
`;
const Description = styled.p`
	color: #fff;
	line-height: 1.5;
	width: 100%;
`;
const ExhibitorDetails = () => {
	const router = useRouter();
	const id = router?.query?.id as string;
	const [exhibitor, setExhibitor] = useState<Exhibitor>({} as Exhibitor);
	const fetchData = async () => {
		const response = await fetchExhibitor(id);
		const exhibitorInfo = response.data || {};
		setExhibitor(exhibitorInfo);
	};
	useEffect(() => {
		if (id) {
			fetchData();
		}
	}, [id]);

	const { logo, name, country, description, backgroundImg } = exhibitor;

	return (
		<Container>
			<Header />
			<ExhibitorWrapper>
				<ExhibitorContainer>
					{logo?.url && <ExhibitorAvatar logoUrl={logo?.url} name={name} logoSize={35} />}
					<ExhibitorName>{name}</ExhibitorName>
					<ExhibitorIcon height="20px" />
					<ExhibitorCountry>
						<img src={auIcon} alt="aus" className="ausicon" />
					</ExhibitorCountry>
				</ExhibitorContainer>
				<ExhibitorInfo>
					{backgroundImg && (
						<ExhibitorImageWrapper>
							<img src={backgroundImg?.url} alt={name} />
						</ExhibitorImageWrapper>
					)}
					<Description>
						Company Profile:
						<br />
						{description}
					</Description>
				</ExhibitorInfo>
			</ExhibitorWrapper>
			<Footer />
		</Container>
	);
};

export default ExhibitorDetails;
