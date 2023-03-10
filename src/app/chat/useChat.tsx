'use client';
import React, { useRef, useState } from 'react';
import openAiController, {
	TchatProperty,
} from '@/controller/openAiControlloer';

export default function useChat() {
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
	return {
		textAreaRef,
		inputValue,
		inputHandler,
		buttonHandler,
		buttonRef,
		isLoading,
		answerArray,
	};
}
