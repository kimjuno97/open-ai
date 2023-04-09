'use client';
import React, { useRef, useState } from 'react';

import chatController, { TchatProperty } from '@/controller/chatControlloer';

import blankValidation from '../utills/blankValidation';

export default function useChat() {
	const [inputValue, setInputValue] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [answerArray, setAnswerArray] = useState<TchatProperty[]>([]);

	const buttonRef = useRef<HTMLButtonElement>(null);
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	const inputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		e.target.style.height = `${e.target.scrollHeight}px`;
		setInputValue(e.target.value);
	};

	const enterHandler = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (!textAreaRef.current || isLoading) return;
		if (e.key === 'Backspace') {
			textAreaRef.current.style.height = 'auto';
		}
		if (e.shiftKey) return;
		if (e.key === 'Enter') {
			try {
				const { availdValue, validation } = blankValidation(inputValue);
				if (validation) {
					const trimmedArr = answerArray.slice(-10);
					const messages: TchatProperty[] = [...trimmedArr, { role: 'user', content: inputValue }];
					setIsLoading(true);
					const { answer } = await chatController({ messages });
					setIsLoading(false);
					setAnswerArray(prev => [...prev, { role: 'user', content: inputValue }, answer]);
					textAreaRef.current.style.height = 'auto';
					setInputValue('');
				} else {
					setInputValue(availdValue);
				}
				textAreaRef.current.focus();
			} catch (err) {
				console.error(err);
				alert('요청이 밀렸습니다.!! 잠시후 다시 요청하세요!!');
				setIsLoading(false);
			}
		}
	};

	const buttonHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		try {
			if (!textAreaRef.current) return;
			const { availdValue, validation } = blankValidation(inputValue);
			if (validation) {
				const trimmedArr = answerArray.slice(-10);
				/**
				 * 요청할 message 생성.
				 * 대화형을 유지하기 위해 전에 주고 받은 내용도 전달해 줘야 함.
				 */
				const messages: TchatProperty[] = [...trimmedArr, { role: 'user', content: inputValue }];
				setIsLoading(true);
				const { answer } = await chatController({ messages });
				setIsLoading(false);
				setAnswerArray(prev => [...prev, { role: 'user', content: inputValue }, answer]);
				textAreaRef.current.style.height = 'auto';
				setInputValue('');
			} else {
				setInputValue(availdValue);
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
		enterHandler,
	};
}
