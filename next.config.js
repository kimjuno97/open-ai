/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	experimental: {
		appDir: true,
	},
	compiler: {
		styledComponents: true,
	},
	// images: {
	// 	remotePatterns: [
	// 		{
	// 			protocol: 'https',
	// 			hostname: 'oaidalleapiprodscus.blob.core.windows.net',
	// 			port: '',
	// 			pathname: '/**',
	// 		},
	// 	],
	// },
};

module.exports = nextConfig;
