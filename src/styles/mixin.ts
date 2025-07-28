import { css } from 'styled-components';

import { color } from '@/styles/variables';

const { darkPrimaryColor, primaryColor } = color;

/* Nav item line-through decoration and animation */

export const navBarTitleDecoration = (
	width: string,
	top = 'calc(50% - 2px)',
	left = '0px',
	decorationColor = primaryColor
) => css`
	position: relative;
	z-index: 1;
	&::before {
		-moz-transform: scaleX(0) translateZ(0);
		-moz-transform-origin: 100% 50%;
		-moz-transition: -moz-transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
		-webkit-transform: scaleX(0) translateZ(0);
		-webkit-transform-origin: 100% 50%;
		-webkit-transition: -webkit-transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
		background-color: ${decorationColor};
		content: '';
		height: 4px;
		left: ${left};
		position: absolute;
		top: ${top};
		transform: scaleX(0) translateZ(0);
		transform-origin: 100% 50%;
		transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
		width: ${width};
		z-index: -1;
	}
`;

export const activeNavBarTitleDecoration = () => css`
	-moz-transform: scaleX(1) translateZ(0);
	-moz-transform-origin: 0 50%;
	-webkit-transform: scaleX(1) translateZ(0);
	-webkit-transform-origin: 0 50%;
	transform: scaleX(1) translateZ(0);
	transform-origin: 0 50%;
	width: 100%;
`;

export const tagDecoration = () => css`
	&::before {
		content: '<';
		display: inline-block;
		font-size: 0.8em;
		padding-right: 0.2em;
		position: relative;
	}
	&::after {
		content: '/>';
		display: inline-block;
		font-size: 0.8em;
		padding-left: 0.2em;
		position: relative;
	}
`;

export const animationHoverImageParent = (translateX = '4px') => css`
	display: block;
	overflow: hidden;
	width: inherit;
	&:hover img {
		-moz-transform: scale(1.12) translate3d(${translateX}, 0, 0);
		-moz-transition: -moz-transform 1s cubic-bezier(0.23, 1, 0.32, 1);
		-webkit-transform: scale(1.12) translate3d(${translateX}, 0, 0);
		-webkit-transition: -webkit-transform 1s cubic-bezier(0.23, 1, 0.32, 1);
		transform: scale(1.12) translate3d(${translateX}, 0, 0);
		transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1);
	}
`;

export const animationHoverImage = (translateX = '-4px') => css`
	-moz-transform: scale(1.12) translate3d(${translateX}, 0, 0);
	-moz-transition: -moz-transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
	-webkit-transform: scale(1.12) translate3d(${translateX}, 0, 0);
	-webkit-transition: -webkit-transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
	display: block;
	height: 100%;
	transform: scale(1.12) translate3d(${translateX}, 0, 0);
	transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
	width: 100%;
`;

export const textEllipsis = (line = 1) => css`
	-webkit-box-orient: vertical;
	-webkit-line-clamp: ${line};
	display: -webkit-box;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const animation = (
	name: string,
	duration: string,
	timingFunction: string,
	delay: string,
	iterationCount = '1'
) => css`
	-moz-animation: ${name} ${duration} ${timingFunction} ${delay} ${iterationCount};
	-webkit-animation: ${name} ${duration} ${timingFunction} ${delay} ${iterationCount};
	animation: ${name} ${duration} ${timingFunction} ${delay} ${iterationCount};
`;

export const animationFillMode = (mode = 'forwards') => css`
	-o-animation-fill-mode: ${mode};
	-webkit-animation-fill-mode: ${mode};
	animation-fill-mode: ${mode};
`;

export const sectionTitle = css`
	font-size: 40px;
	font-weight: 700;
	line-height: 1.1;
	margin: 0;
	margin-bottom: 64px;
	max-width: 400px;
	opacity: 0;
	${animation('fade-in-opacity-transform-to-up', '1s', 'ease', '0.7s', '1')};
	${animationFillMode()};
`;

export const sectionSubtitle = css`
	color: ${darkPrimaryColor};
	font-size: 14px;
	font-style: italic;
	letter-spacing: 1px;
	${tagDecoration()};
	margin: 0;
	margin-bottom: 6px;
	${animation('fade-in-opacity-transform-to-up', '1s', 'ease', '0.4s', '1')};
	${animationFillMode()};
	opacity: 0;
`;

export const backdrop = css`
	display: inline-block;
	font-size: 15vw;
	font-weight: 700;
	left: 60px;
	line-height: 1.15em;
	opacity: 0.2;
	overflow: hidden;
	position: absolute;
	top: 20px;
	vertical-align: middle;
	&::after {
		-ms-transform: scale(1.5);
		-webkit-transform: scale(1.5);
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAMAAABFaP0WAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAA5JREFUCNdjYGRgYGQEAAAOAATa5WfvAAAAAElFTkSuQmCC);
		background-size: 2px 2px;
		content: '';
		display: block;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		transform: scale(1.5);
		width: 100%;
		z-index: 0;
	}
`;

export const carouselStyle = css`
	.control-dots {
		.dot {
			background: #afafaf;
			box-shadow: none;
			height: 10px;
			width: 10px;
			&:hover {
				background: ${primaryColor};
			}
		}
		.selected {
			background: ${primaryColor};
			border: 1px solid ${primaryColor};
		}
	}
	.selected {
		z-index: 0 !important;
	}
`;
