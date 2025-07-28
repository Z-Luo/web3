import { IColor, IDevices, IInputColor, ISize } from '@/interfaces/variables';

export enum EDeviceSize {
	miniMobile = 'miniMobile',
	mobile = 'mobile',
	tablet = 'tablet',
	laptop = 'laptop',
	largeLaptop = 'largeLaptop',
	desktop = 'desktop',
	largeDesktop = 'largeDesktop',
	wideScreen = 'wideScreen'
}

export const sizes: ISize = {
	miniMobile: 320,
	mobile: 576,
	tablet: 768,
	laptop: 1024,
	largeLaptop: 1440,
	desktop: 1920,
	largeDesktop: 2560,
	wideScreen: 3840
};

export const devices: IDevices = {
	miniMobile: `(min-width: ${sizes.miniMobile}px)`,
	mobile: `(min-width: ${sizes.mobile}px)`,
	tablet: `(min-width: ${sizes.tablet}px)`,
	laptop: `(min-width: ${sizes.laptop}px)`,
	largeLaptop: `(min-width: ${sizes.largeLaptop}px)`,
	desktop: `(min-width: ${sizes.desktop}px)`,
	largeDesktop: `(min-width: ${sizes.largeDesktop}px)`
};

export const color: IColor = {
	primaryColor: '#52f6c6',
	darkPrimaryColor: '#50D6AE',
	whiteColor: '#fff',
	textColor: '#282828',
	blackColor: '#000',
	warningColor: '#fb394a',
	InfoColor: '#77b1f5',
	descriptionColor: '#333',
	cardBackgroundColor: '#1a1a1a',
	greyColor: '#b2b2b2',
	buttonBackgroundColor: '#242424',
	inputTextColor: '#858585',
	formTextColor: ' #999999'
};

export const inputColor: IInputColor = {
	borderColor: '#cacaca',
	placeholderColor: '#d3d4d5',
	formLabelColor: '#a4a4a4'
};

export const headerHeight = '100px';
