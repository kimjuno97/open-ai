'use client';

import { useState, useRef } from 'react';

export default function useImage() {
	const [inputValue, setInputValue] = useState('');
	const buttonRef = useRef<HTMLButtonElement>(null);
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	const [isLoading, setIsLoading] = useState(false);

	const inputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		if (isLoading) return;
		setInputValue(e.target.value);
	};

	const buttonHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		try {
			if (!textAreaRef.current) return;

			const trimInputValue = inputValue.trim().replace(/\n/g, '');

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
	};
}
