import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';
import styled from 'styled-components';

import { color, devices } from '@/styles/variables';

const { primaryColor, greyColor, textColor } = color;

interface ThemeButtonProps {
	children: React.ReactNode;
	href?: string;
	onClick?: React.MouseEventHandler;
	disabled?: boolean;
}

type StyledButtonProps = {
	width?: string;
	disabled?: boolean;
};

const StyledButton = styled.button<StyledButtonProps>`
	background-color: ${props => (props.disabled ? greyColor : primaryColor)};
	border: none;
	border-radius: 30px;
	color: ${textColor};
	cursor: pointer;
	font-size: 14px;
	font-weight: 700;
	letter-spacing: 1px;
	line-height: 24px;
	padding: 11px 14px;
	text-transform: uppercase;
	width: ${props => props.width || 'auto'};
	&:hover {
		background-color: ${props => (props.disabled ? greyColor : primaryColor)};
		cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

		svg {
			-moz-transform: translate(0, -50%);
			-moz-transition: -moz-transform 0.2s cubic-bezier(0.19, 0.5, 0.46, 0.88), opacity 0.2s;
			-webkit-transform: translate(0, -50%);
			-webkit-transition: -webkit-transform 0.2s cubic-bezier(0.19, 0.5, 0.46, 0.88),
				opacity 0.2s;
			opacity: 1;
			transform: translate(0, -50%);
			transition: transform 0.2s cubic-bezier(0.19, 0.5, 0.46, 0.88), opacity 0.2s;
			visibility: visible;
		}
		span {
			-moz-transform: translateX(-5px);
			-webkit-transform: translateX(-5px);
			transform: translateX(-5px);
		}
	}
`;

const ButtonContent = styled.p`
	margin: 0;
	position: relative;
	span {
		-moz-transition: -moz-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
		-webkit-transition: -webkit-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
		display: inline-block;
		transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
	}
	svg {
		-moz-transform: translate(-5px, -50%);
		-moz-transition: -moz-transform 0s 0.1s, opacity 0.1s;
		-webkit-transform: translate(-5px, -50%);
		-webkit-transition: -webkit-transform 0s 0.1s, opacity 0.1s;
		font-size: 12px;
		left: 100%;
		opacity: 0;
		position: absolute;
		top: 50%;
		transform: translate(-5px, -50%);
		transition: transform 0s 0.1s, opacity 0.1s;
		visibility: hidden;
		will-change: transform, opacity;
	}
`;

const ThemeButton: React.FC<ThemeButtonProps & { width?: string }> = ({
	children,
	width,
	href,
	...props
}) => {
	const renderButton = (
		<StyledButton {...props} width={width}>
			<ButtonContent>
				<span>{children}</span>
				<ArrowForwardIosIcon />
			</ButtonContent>
		</StyledButton>
	);
	return href ? <Link href={href}>{renderButton}</Link> : renderButton;
};

export default ThemeButton;
