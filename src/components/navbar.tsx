'use client';
import React from 'react';
import styled from 'styled-components';

export default function navbar() {
	return (
		<NavBar>
			<ChatButton>
				<PlusIcon>➕</PlusIcon>
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
	padding: 7px 15px;
	background: none;
	border: 0.5px solid gray;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		background: #2b2c2f;
	}
`;

const PlusIcon = styled.div`
	padding-right: 10px;
`;
