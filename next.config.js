/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['@mui/material', '@mui/icons-material']);

const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: {
			topLevelImportPaths: [
				'@mui/material',
				'@mui/material/styles',
				'@mui/styled-engine-sc',
				'@mui/styled-engine'
			],
			ssr: true
		}
	},
	images: {
		loader: 'custom'
	},
	// experimental: {
	// 	outputStandalone: true
	// },
	output: 'standalone',
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack']
		});
		config.resolve.fallback = {
			fs: false
		};
		return config;
	}
};

module.exports = withTM(nextConfig);
