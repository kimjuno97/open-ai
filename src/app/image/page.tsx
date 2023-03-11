'use client';

import Layout from '@/components/layout';
import Spiner from '@/components/Spiner';
import styled from 'styled-components';
import useImage from './useImage';

export default function Page() {
	const {
		textAreaRef,
		inputValue,
		inputHandler,
		buttonHandler,
		buttonRef,
		isLoading,
	} = useImage();
	return (
		<Layout>
			<Form>
				<TextArea
					ref={textAreaRef}
					value={inputValue}
					onChange={inputHandler}
					autoFocus
				/>
				<Button
					onClick={buttonHandler}
					ref={buttonRef}
					disabled={isLoading}>
					{isLoading ? <Spiner /> : '전송'}
				</Button>
			</Form>
		</Layout>
	);
}

const Form = styled.form`
	display: flex;
	justify-content: center;
	gap: 5px;
	width: 100%;
	padding: 10px;
	margin-bottom: 10px;
`;

const TextArea = styled.textarea`
	width: 80%;
	height: 50px;
	padding: 10px;
	color: white;
	background: #353640;
	border-radius: 5px;
	resize: none;
	border: none;
	:focus {
		outline: none;
	}
`;

const Button = styled.button`
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
