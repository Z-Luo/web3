import styled from 'styled-components';

interface ExhibitorIconProps {
	height: string;
}

const Wrapper = styled.div<{ height: string }>`
	cursor: pointer;
	display: block;
	height: ${props => props.height};
	width: 90px;
	img {
		height: ${props => props.height};
		width: 96px;
	}
`;

const exhibitorIcon = '/images/icons/exhibitor.svg';

const ExhibitorIcon: React.FC<ExhibitorIconProps> = ({ height }) => {
	return (
		<Wrapper height={height}>
			<img src={exhibitorIcon} alt="Exhibitor icon" />
		</Wrapper>
	);
};

export default ExhibitorIcon;
