import styled from 'styled-components';

import contentList from '@/components/Pages/Stages/MainContents/contentList.json';
import ContentRow from '@/components/Pages/Stages/MainContents/ContentRow/ContentRow';
import { devices } from '@/styles/variables';

const MainSection = styled.div`
	margin: 0 auto;
	max-width: 1600px;
	@media ${devices.miniMobile} {
		width: calc(100vw - 100px);
	}
	@media ${devices.laptop} {
		width: calc(100vw - 200px);
	}
	@media ${devices.desktop} {
		width: 80vw;
	}
`;
const MainContents = () => {
	return (
		<MainSection>
			{contentList.map((content, index) => (
				<ContentRow
					key={content._id}
					rowCount={index}
					description={content.text}
					imageSrc={content.imageSrc}
					title={content.title}
					subTitle={content.subtitle}
				/>
			))}
		</MainSection>
	);
};

export default MainContents;
