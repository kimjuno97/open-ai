import './globals.css';

export const metadata = {
	title: 'openAI',
	description: 'free openAI',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='ko'>
			<body>{children}</body>
		</html>
	);
}
