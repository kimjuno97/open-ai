import Navbar from './navbar';

import styled from 'styled-components';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
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
