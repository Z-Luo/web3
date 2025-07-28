import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { upperFirst } from 'lodash';
import ReactCountdown, { CountdownTimeDelta } from 'react-countdown';
import styled from 'styled-components';

import ECountdownKey from '@/constants/countdown';
import { ISize } from '@/interfaces/variables';
import { EDeviceSize, color, devices } from '@/styles/variables';

dayjs.extend(duration);
dayjs.extend(utc);
dayjs.extend(timezone);
const { primaryColor } = color;

interface CountdownProps {
	countdownDate?: string;
	NumberFontSizeConfig?: ISize;
}

interface CountdownNumberProps {
	NumberFontSizeConfig?: ISize;
}

const CountdownContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	@media ${devices.tablet} {
		justify-content: flex-start;
	}
`;

const CountdownItemContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	font-weight: 700;
	min-width: 24vw;
	text-align: center;
	@media ${devices.mobile} {
		min-width: 26vw;
	}
	@media ${devices.tablet} {
		min-width: unset;
	}
	@media ${devices.tablet} {
		margin-right: 60px;
	}
	@media ${devices.largeLaptop} {
		margin-right: 80px;
	}
`;

const CountdownNumber = styled.p<CountdownNumberProps>`
	font-size: 36px;
	margin: 0;
	@media ${devices.miniMobile} {
		font-size: ${({ NumberFontSizeConfig }) =>
			`${(NumberFontSizeConfig && NumberFontSizeConfig[EDeviceSize.miniMobile]) || 36}px`};
	}
	@media ${devices.mobile} {
		font-size: ${({ NumberFontSizeConfig }) =>
			`${(NumberFontSizeConfig && NumberFontSizeConfig[EDeviceSize.mobile]) || 36}px`};
	}
	@media ${devices.tablet} {
		font-size: ${({ NumberFontSizeConfig }) =>
			`${(NumberFontSizeConfig && NumberFontSizeConfig[EDeviceSize.tablet]) || 50}px`};
	}
	@media ${devices.laptop} {
		font-size: ${({ NumberFontSizeConfig }) =>
			`${(NumberFontSizeConfig && NumberFontSizeConfig[EDeviceSize.laptop]) || 60}px`};
	}
	@media ${devices.largeLaptop} {
		font-size: ${({ NumberFontSizeConfig }) =>
			`${(NumberFontSizeConfig && NumberFontSizeConfig[EDeviceSize.largeLaptop]) || 80}px`};
	}
`;
const CountdownUnit = styled.p`
	color: ${primaryColor};
	font-size: 18px;
	margin: 0;
`;

const COUNTDOWN_DATE = dayjs.tz('2024-05-19 08:00:00', 'Australia/Brisbane').toISOString();

const Countdown: React.FC<CountdownProps> = ({
	countdownDate = COUNTDOWN_DATE,
	NumberFontSizeConfig
}) => {
	const renderCountdown = ({ total, hours, minutes, seconds }: CountdownTimeDelta) => {
		const countdownInfo = [
			dayjs.duration(total).months(),
			dayjs.duration(total).days(),
			hours,
			minutes,
			seconds
		];

		return Object.values(ECountdownKey).map((countdownKey, index) => {
			const countdownNumber = (countdownInfo && countdownInfo[index]) || 0;
			return (
				<CountdownItemContainer key={countdownKey}>
					<CountdownNumber NumberFontSizeConfig={NumberFontSizeConfig}>
						{countdownInfo ? countdownNumber.toString().padStart(2, '0') : ''}
					</CountdownNumber>
					<CountdownUnit>
						{upperFirst(countdownKey)}
						{countdownNumber === 1 ? '' : 's'}
					</CountdownUnit>
				</CountdownItemContainer>
			);
		});
	};
	return (
		<CountdownContainer>
			<ReactCountdown date={dayjs(countdownDate).toISOString()} renderer={renderCountdown} />
		</CountdownContainer>
	);
};

export default Countdown;
