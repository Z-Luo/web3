import { createTheme } from '@mui/material/styles';

import { color } from './variables';

// override default MUI module
declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xs: false; // removes the `xs` breakpoint
		sm: false;
		md: false;
		lg: false;
		xl: false;
		miniMobile: true;
		mobile: true;
		tablet: true;
		laptop: true;
		largeLaptop: true;
		desktop: true;
		largeDesktop: true;
		wideScreen: true;
	}
}

// Warning: MUI
const defaultTheme = createTheme({
	typography: {
		button: {
			textTransform: 'none'
		}
	},
	palette: {
		primary: {
			main: `${color.primaryColor}`
		}
	},
	breakpoints: {
		values: {
			miniMobile: 0,
			mobile: 320,
			tablet: 576,
			laptop: 768,
			largeLaptop: 1024,
			desktop: 1440,
			largeDesktop: 1920,
			wideScreen: 2560
		}
	}
});

export default defaultTheme;
