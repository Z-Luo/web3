import { SetStateAction } from 'react';
import styled from 'styled-components';

import { EEventType } from '@/constants/event';
import { activeNavBarTitleDecoration, navBarTitleDecoration } from '@/styles/mixin';
import { devices } from '@/styles/variables';

interface EventFilterProps {
	currentFilterType: EEventType | undefined;
	setCurrentFilterType: React.Dispatch<SetStateAction<EEventType | undefined>>;
}

interface IStyledLinkContainerProps {
	active: boolean;
}

const FilterContainer = styled.div`
	display: flex;
	flex-direction: column;
	font-weight: 700;
	a {
		margin-right: 40px;
	}
	@media ${devices.laptop} {
		flex-direction: row;
	}
`;

const FilterOption = styled.div<IStyledLinkContainerProps>`
	cursor: pointer;
	font-size: 12px;
	font-weight: 700;
	padding: 8px 0;
	text-transform: uppercase;
	span {
		${navBarTitleDecoration('calc(100% + 4px)', '50%', '-2px')};
	}
	span:before {
		${({ active }) => (active ? activeNavBarTitleDecoration() : null)}
	}
	&:hover span:before {
		${activeNavBarTitleDecoration()}
	}
	@media ${devices.laptop} {
		padding: 40px 0;
		font-size: 13px;
		margin-right: 40px;
	}
`;

const EventFilter: React.FC<EventFilterProps> = ({ currentFilterType, setCurrentFilterType }) => {
	return (
		<FilterContainer>
			<FilterOption
				active={!currentFilterType}
				onClick={() => setCurrentFilterType(undefined)}
			>
				<span>all events</span>
			</FilterOption>
			{Object.values(EEventType).map(filterType => (
				<FilterOption
					active={filterType === currentFilterType}
					key={filterType}
					onClick={() => setCurrentFilterType(filterType)}
				>
					<span>{filterType}</span>
				</FilterOption>
			))}
		</FilterContainer>
	);
};

export default EventFilter;
