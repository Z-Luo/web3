/* eslint-disable @next/next/no-img-element */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { color } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const dateIcon = '/images/icons/date.svg';
const locationIcon = '/images/icons/location.svg';
const exhibitorIcon = '/images/icons/exhibitor.svg';
const logoBackground = '/images/exhibition/invalid-name.png';

const { primaryColor, InfoColor, cardBackgroundColor } = color;

const StyledCard = styled(Card)`
	background-color: ${cardBackgroundColor};
	border-radius: 0;
	display: flex;
	flex-direction: column;
	height: 410px;
	transition: transform 0.3s ease;
	&:hover {
		transform: translateY(-10px);
	}
	width: 350px;
`;
const StyledTypography = styled.span`
	color: white;
	font-size: 20px;
	font-weight: bold;
`;
const InfoContainer = styled.div`
	align-items: baseline;
	color: #b2b2b2;
	display: flex;
	font-size: 16px;
	letter-spacing: 1px;
	line-height: 1.5;
`;
const ImageContainer = styled.div`
	height: 14px;
	min-width: 14px;
	position: relative;
`;
const DateInfo = styled.span`
	font-size: 16px;
	margin-left: 8px;
`;

const CardMediaLink = styled(Link)`
	height: 154px;
	position: relative;
	width: 100%;
`;

const StyledCardContent = styled(CardContent)`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	gap: 16px;
	margin-top: 16px;
`;

const CompanyAvatar = styled.div`
	background-image: url(${logoBackground});
	background-repeat: no-repeat;
	background-size: cover;
	height: 46px;
	position: relative;
	width: 39px;
	img.company {
		border-radius: 50%;
		height: 35px;
		margin: 9px 2px 2px 2px;
		position: absolute;
		transform: none;
		width: 35px;
	}
`;

const CompanyInfo = styled.div`
	align-items: center;
	display: flex;
	gap: 15px;
	height: 39px;
	margin: 0 0 16px 16px;
`;

const CompanyName = styled.span`
	color: white;
	font-size: 16px;
	letter-spacing: 1px;
	line-height: 1;
`;

const ExhibitorIconWrapper = styled.div`
	cursor: pointer;
	display: block;
	height: 20px;
	width: 90px;
	img {
		height: 20px;
		width: 96px;
	}
`;
const ExhibitorIconPlaceholder = styled.div`
	width: 90px;
`;
const CardFooter = styled.div`
	background: linear-gradient(to right, ${primaryColor}, ${InfoColor});
	height: 4px;
	width: 100%;
`;
const StyledLink = styled(Link)`
	align-items: center;
	display: flex;
	gap: 6px;
`;
const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
	<Tooltip {...props} classes={{ popper: className }} />
))({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: cardBackgroundColor,
		borderRadius: '1px',
		position: 'relative',
		padding: '17px 12px 12px 12px',
		border: 'solid 1px #494949',
		width: '314px',
		height: 'fit-content',
		fontSize: '12px',
		lineHeight: '1.67',
		'&::before': {
			border: 'solid 1px'
		}
	}
});

interface EventCardProps {
	eventInfo: IMeetup;
}

dayjs.extend(utc);
dayjs.extend(timezone);
const format = 'dddd, MMM D, hA [GMT]Z';

const AiEventCard: React.FC<EventCardProps> = ({ eventInfo }) => {
	const { _id, bannersUploader, address, exhibitors, period, title, description } = eventInfo;
	const company = exhibitors?.[0] || {};
	return (
		<StyledCard>
			{bannersUploader?.url && (
				<CardMediaLink href={`/events/${_id}`}>
					<Image
						src={bannersUploader?.url}
						alt={title}
						loader={imageLoader}
						unoptimized
						fill
					/>
				</CardMediaLink>
			)}
			<StyledCardContent>
				<Link href={`/events/${_id}`}>
					<StyledTypography>{title}</StyledTypography>
				</Link>
				{period?.start && (
					<InfoContainer>
						<ImageContainer>
							<Image
								src={dateIcon}
								alt="date"
								fill
								loader={imageLoader}
								unoptimized
							/>
						</ImageContainer>
						<DateInfo>{dayjs(period.start).utc().local().format(format)}</DateInfo>
					</InfoContainer>
				)}
				{address && (
					<InfoContainer>
						<ImageContainer>
							<Image
								src={locationIcon}
								alt="address"
								fill
								loader={imageLoader}
								unoptimized
							/>
						</ImageContainer>
						<DateInfo>{address}</DateInfo>
					</InfoContainer>
				)}
			</StyledCardContent>
			<CompanyInfo>
				<StyledLink href="/company/companyId">
					<CompanyAvatar>
						<img src={company.logo?.url} alt={company.name} className="company" />
					</CompanyAvatar>
					<CompanyName>{company.name}</CompanyName>
				</StyledLink>
				{exhibitors.length !== 0 ? (
					<ExhibitorIconWrapper>
						<StyledTooltip title={description} arrow>
							<img
								className="exhibitorIcon"
								src={exhibitorIcon}
								alt="Exhibitor icon"
							/>
						</StyledTooltip>
					</ExhibitorIconWrapper>
				) : (
					<ExhibitorIconPlaceholder />
				)}
			</CompanyInfo>
			<CardFooter />
		</StyledCard>
	);
};
export default AiEventCard;
