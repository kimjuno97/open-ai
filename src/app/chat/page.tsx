'use client';
import Head from 'next/head';
import { ChangeEventHandler, KeyboardEventHandler, useEffect } from 'react';
import styled from 'styled-components';

import { AnswerBox, IFrameReject, Layout, Spiner } from '@/components';
import papagoTranslationController from '@/controller/papagoController';
import { Button, Form, TextArea, TranslationDiv } from '@/styledComponents';

import useDebounce from '../../hook/useDebounce';
import useChat from './useChat';

export default function Page() {
	const {
		textAreaRef,
		inputValue,
		setTranslationValue,
		translationToggle,
		translationToggleHandler,
		inputHandler,
		buttonHandler,
		buttonRef,
		isLoading,
		answerArray,
		enterHandler,
		translationValue,
	} = useChat();

	const { debouncing, setControllerFun } = useDebounce();
	useEffect(() => {
		setControllerFun(() => papagoTranslationController);
	}, [setControllerFun]);

	IFrameReject();

	const onChangeEvent: ChangeEventHandler<HTMLTextAreaElement> = e => {
		inputHandler(e);
		debouncing(e, setTranslationValue);
	};

	const onkeyDownEvent: KeyboardEventHandler<HTMLTextAreaElement> = e => {
		enterHandler(e);
	};
	return (
		<>
			<Head>
				<title>제목</title>
				<meta name="description" content="제목 부분입니다만?" />
			</Head>
			<Layout>
				{translationToggle && <TranslationDiv>{translationValue}</TranslationDiv>}
				<Form>
					<TextArea
						ref={textAreaRef}
						value={inputValue}
						onChange={onChangeEvent}
						onKeyDown={onkeyDownEvent}
						disabled={isLoading}
						autoFocus
					/>
					<Button onClick={buttonHandler} ref={buttonRef} disabled={isLoading}>
						{isLoading ? <Spiner /> : '전송'}
					</Button>
				</Form>
				<RadioWrap>
					<CheckBox
						checked={translationToggle}
						type="checkbox"
						id="en"
						name="en"
						onChange={translationToggleHandler}
					/>
					<Label htmlFor="en">영어로 질문</Label>
				</RadioWrap>
				<AnswerBox answerArray={answerArray} />
			</Layout>
		</>
	);
}

const RadioWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
	cursor: pointer;
`;

const CheckBox = styled.input`
	zoom: 1.5;
`;

const Label = styled.label`
	color: white;
	font-size: 1rem;
	cursor: pointer;
`;
