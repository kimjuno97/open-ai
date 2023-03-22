import './globals.css';

import StyledComponentsRegistry from './registry';

export const metadata = {
	title: 'openAI',
	description: 'free openAI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ko">
			<body>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
