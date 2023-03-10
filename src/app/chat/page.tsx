'use client';
import React, { useRef, useState } from 'react';

import Layout from '@/components/layout';
import AnswerBox from '@/components/AnswerBox';
import openAiController, {
	TchatProperty,
} from '@/controller/openAiControlloer';
import Spiner from '@/components/Spiner';

import styled from 'styled-components';

/**
 * 해야할것들
 * 2. code block 완성하기
 * 3. 로딩 처리하기
 * 4. 광고 달기
 */

export default function Home() {
	const [inputValue, setInputValue] = useState('');
	const buttonRef = useRef<HTMLButtonElement>(null);
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const [answerArray, setAnswerArray] = useState<TchatProperty[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const inputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		if (isLoading) return;
		setInputValue(e.target.value);
	};

	const buttonHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		try {
			if (!textAreaRef.current) return;
			/** 공백 및 엔터 검사 */
			const trimInputValue = inputValue.trim().replace(/\n/g, '');
			if (!!trimInputValue) {
				const trimmedArr = answerArray.slice(-10);
				/**
				 * 요청할 message 생성.
				 * 대화형을 유지하기 위해 전에 주고 받은 내용도 전달해 줘야 함.
				 */
				const messages: TchatProperty[] = [
					...trimmedArr,
					{ role: 'user', content: inputValue },
				];
				setIsLoading(true);
				const { answer } = await openAiController({ messages });
				setIsLoading(false);
				setAnswerArray(prev => [
					...prev,
					{ role: 'user', content: inputValue },
					answer,
				]);
				setInputValue('');
			} else {
				setInputValue(trimInputValue);
			}
			textAreaRef.current.focus();
		} catch (err) {
			console.error(err);
			alert('요청이 밀렸습니다.!! 잠시후 다시 요청하세요!!');
			setIsLoading(false);
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
							autoFocus
						/>
						<Button
							onClick={buttonHandler}
							ref={buttonRef}
							disabled={isLoading}>
							{isLoading ? <Spiner /> : '전송'}
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
