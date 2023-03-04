'use client';
import React, { useRef, useState } from 'react';

import Layout from '@/components/layout';
import AnswerBox from '@/components/AnswerBox';
import openAiController, {
	TchatProperty,
} from '@/controller/openAiControlloer';

import styled from 'styled-components';

export default function Home() {
	const [inputValue, setInputValue] = useState('');
	const buttonRef = useRef<HTMLButtonElement>(null);
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	const [answerArray, setAnswerArray] = useState<TchatProperty[]>([]);

	const inputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputValue(e.target.value);
	};

	const submitHandler = (e: React.KeyboardEvent) => {
		// 조건 shift가 안눌리고 enter를 누를시
		if (e.key === 'Enter' && !e.shiftKey && buttonRef.current) {
			e.preventDefault();
			buttonRef.current.click();
		}
	};
	const buttonHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		try {
			if (textAreaRef.current) {
				const { answer } = await openAiController({ content: inputValue });
				setAnswerArray(prev => [...prev, answer]);
				setInputValue('');
				textAreaRef.current.focus();
			}
		} catch (err) {
			console.error(err);
			alert('요청이 밀렸습니다.!! 잠시후 다시 요청하세요!!');
		}
	};

	return (
		<>
			<Layout>
				<Main>
					<Form>
						<TextArea
							ref={textAreaRef}
							value={inputValue}
							onChange={inputHandler}
							onKeyDown={submitHandler}
							autoFocus
						/>
						<Button
							onClick={buttonHandler}
							ref={buttonRef}>
							전송
						</Button>
					</Form>
					<AnswerBox answerArray={answerArray} />
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
	background: #434654;
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
	height: 50px;
	padding: 10px;
	color: white;
	background: #353640;
	resize: none;
	border: none;
	:focus {
		outline: none;
	}
`;

const Button = styled.button``;
