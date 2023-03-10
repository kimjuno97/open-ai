'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

export default function Navbar() {
	const router = useRouter();

	const routerHandler = (path: string) => () => {
		router.push(path);
	};
	return (
		<NavBar>
			<ChatButton onClick={routerHandler('/chat')}>CHAT MODEL</ChatButton>
			<ChatButton onClick={routerHandler('/image')}>IMAGE MODEL</ChatButton>
			{/* <ChatButton>
				<PlusIcon
					src='./btnPlus.svg'
					alt='plus'
					width={15}
					height={15}
				/>
				<div>New Chat</div>
			</ChatButton> */}
		</NavBar>
	);
}

const NavBar = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 25vw;
	padding: 10px;
	background: #202123;
`;

const ChatButton = styled.button`
	display: flex;
	justify-content: center;
	padding: 7px 15px;
	background: none;
	border: 0.5px solid gray;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		background: #2b2c2f;
	}
	color: white;
`;

const PlusIcon = styled(Image)`
	margin-right: 10px;
`;
