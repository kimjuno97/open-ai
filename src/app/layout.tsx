import './globals.css';

import StyledComponentsRegistry from './registry';

export const metadata = {
	title: 'openAI',
	description: 'free openAI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ko">
			<script src="//rum-static.pingdom.net/pa-6434c7c2405b1d0011001d72.js" async />
			<body>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
