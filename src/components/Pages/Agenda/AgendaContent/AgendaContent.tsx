import styled from 'styled-components';

import AgendaTable from '@/components/Pages/Home/HomeEvent/components/AgendaTable';

const HomeEventContainer = styled.div`
	overflow: hidden;
	position: relative;
`;
const Container = styled.div`
	margin: 0 auto;
	max-width: 1440px;
	padding: 50px 10px;
`;

const ContentContainer = styled.div`
	margin: 10px 0 40px;
`;

const AgendaContent: React.FC = () => {
	return (
		<HomeEventContainer>
			<Container>
				<ContentContainer>
					<AgendaTable />
				</ContentContainer>
			</Container>
		</HomeEventContainer>
	);
};

export default AgendaContent;
