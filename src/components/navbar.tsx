import Image from 'next/image';
import styled from 'styled-components';

export default function navbar() {
	return (
		<NavBar>
			<ChatButton>
				<PlusIcon
					src='./btnPlus.svg'
					alt='plus'
					width={15}
					height={15}
				/>
				<div>New Chat</div>
			</ChatButton>
		</NavBar>
	);
}

const NavBar = styled.nav`
	display: flex;
	flex-direction: column;
	width: 30vw;
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
