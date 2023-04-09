import styled from 'styled-components';

export const Button = styled.button`
	border-radius: 5px;
	cursor: pointer;
	border: none;
	color: white;
	padding: 5px 10px;
	background: #353640;
	outline: none;
	:focus,
	:hover {
		background: #202123;
	}
	:disabled {
		cursor: no-drop;
	}
`;
