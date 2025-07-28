import { ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { Fragment } from 'react';

import type { Page } from '@/interfaces/page';
import defaultTheme from '@/styles/theme';
import '../styles/globals.css';

type Props = AppProps & {
	Component: Page;
};

const App = ({ Component, pageProps }: Props) => {
	const getLayout = Component.getLayout ?? (page => page);
	const Layout = Component.layout ?? Fragment;

	return (
		<ThemeProvider theme={defaultTheme}>
			{/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
			<Script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-QGRPQF01S7"
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){window.dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-QGRPQF01S7');
				`}
			</Script>
			<StyledEngineProvider injectFirst>
				<Layout>{getLayout(<Component {...pageProps} />)}</Layout>
			</StyledEngineProvider>
		</ThemeProvider>
	);
};

export default App;
