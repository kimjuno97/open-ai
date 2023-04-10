import styled from 'styled-components';

export const TextArea = styled.textarea`
	width: 80%;
	height: 50px;
	max-height: 200px;
	padding: 10px;
	color: white;
	background: #353640;
	font-size: 20px;
	border-radius: 5px;
	resize: none;
	border: none;
	:focus {
		outline: none;
	}
`;
