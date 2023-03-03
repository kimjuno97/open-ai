'use client';
import Layout from '@/components/layout';
import styled from 'styled-components';
import React, { useRef, useState } from 'react';

export default function Home() {
	const [inputValue, setInputValue] = useState('');
	const buttonRef = useRef<HTMLButtonElement>(null);

	const inputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputValue(e.target.value);
	};
	console.log(inputValue);
	const submitHandler = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' && buttonRef.current) {
			buttonRef.current.click();
		}
	};
	const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log('ㄹㅇ ㅋㅋ');
	};
	return (
		<>
			<Layout>
				<Main>
					<Form>
						<TextArea
							value={inputValue}
							onChange={inputHandler}
							onKeyDown={submitHandler}
						/>
						<Button
							onClick={buttonHandler}
							ref={buttonRef}>
							전송
						</Button>
					</Form>
				</Main>
			</Layout>
		</>
	);
}

const Main = styled.main`
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	height: 100vh;
`;

const Form = styled.form`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 10px;
	margin-bottom: 10px;
`;

const TextArea = styled.textarea`
	width: 80%;
`;

const Button = styled.button``;
