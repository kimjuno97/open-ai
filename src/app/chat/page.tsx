'use client';
import styled from 'styled-components';

import Layout from '@/components/layout';
import AnswerBox from '@/components/AnswerBox';
import Spiner from '@/components/Spiner';

import useChat from './useChat';

/**
 * 해야할것들
 * 4. 광고 달기
 */

export default function Page() {
	const {
		textAreaRef,
		inputValue,
		inputHandler,
		buttonHandler,
		buttonRef,
		isLoading,
		answerArray,
		enterHandler,
	} = useChat();

	return (
		<>
			<Layout>
				<Form>
					<TextArea
						ref={textAreaRef}
						value={inputValue}
						onChange={inputHandler}
						onKeyDown={enterHandler}
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
			</Layout>
		</>
	);
}

const Form = styled.div`
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
