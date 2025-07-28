import styled from 'styled-components';

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 680px;
`;
const EventImage = styled.div`
	display: flex;
	max-width: 680px;
	img {
		height: auto;
		width: 100%;
	}
`;
const Description = styled.p`
	color: #fff;
	font-size: 16px;
	line-height: 1.5;
	margin: 0;
	padding: 32px 0 0 0;
	white-space: pre-wrap;
	width: 100%;
`;
const Agenda = styled.p`
	color: #fff;
	font-size: 16px;
	font-weight: bold;
	line-height: 1.5;
	margin: 0;
	padding: 48px 0;
	white-space: pre-wrap;
	width: 100%;
`;
interface eventDetailProps {
	eventDetail: IMeetup;
}
const EventDescription: React.FC<eventDetailProps> = ({ eventDetail }) => {
	const { descriptionImage, description, agenda } = eventDetail || {};

	return (
		<ContentWrapper>
			{descriptionImage && (
				<EventImage>
					<img src={descriptionImage.url} alt="Description" />
				</EventImage>
			)}

			<Description>{description}</Description>
			<Agenda>{agenda}</Agenda>
		</ContentWrapper>
	);
};

export default EventDescription;
