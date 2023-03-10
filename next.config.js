/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	experimental: {
		appDir: true,
	},
	compiler: {
		styledComponents: {
			ssr: true,
			displayName: true,
		},
	},
};

module.exports = nextConfig;
