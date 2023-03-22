import styled from 'styled-components';

import KaKaoAdFit from './KaKaoAdFit';
import Navbar from './navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<KaKaoAdFit
				style={{ position: 'absolute', top: 120 }}
				unit="DAN-49xJT0N8IK7ahRFs"
				width="160"
				height="600"
			/>
			<Main>{children}</Main>
		</>
	);
}

const Main = styled.main`
	width: 100%;
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	height: 100vh;
	background: #434654;
`;
