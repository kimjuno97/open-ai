'use client';

import React, { useRef, useState } from 'react';

import imageController, { TImageSize } from '../../controller/imageController';
import blankValidation from '../utills/blankValidation';

export const SMALL_SIZE = '256x256';
export const MIDDLE_SIZE = '512x512';
export const LARGE_SIZE = '1024x1024';

export default function useImage() {
	const [inputValue, setInputValue] = useState('');
	const [radioValue, setRadioValue] = useState<TImageSize>('256x256');
	const [numberValue, setNumberValue] = useState(1);

	const buttonRef = useRef<HTMLButtonElement>(null);
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	const [isLoading, setIsLoading] = useState(false);
	const [imageArray, setImageArray] = useState<Array<string>>([]);

	const inputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		e.target.style.height = `${e.target.scrollHeight}px`;
		setInputValue(e.target.value);
	};

	const enterHandler = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.shiftKey) return;
		if (e.key === 'Enter') {
			try {
				if (!textAreaRef.current || isLoading) return;
				const { availdValue, validation } = blankValidation(inputValue);
				if (validation) {
					setIsLoading(true);

					const { answer } = await imageController({
						prompt: inputValue,
						n: numberValue,
						size: radioValue,
					});
					setIsLoading(false);
					setImageArray(prev => [...prev, ...answer]);
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

	const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const targetValue = e.target.value;

		if (targetValue !== SMALL_SIZE && targetValue !== MIDDLE_SIZE && targetValue !== LARGE_SIZE)
			return;
		setRadioValue(targetValue);
	};

	const numberInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNumberValue(parseInt(e.target.value));
	};

	const buttonHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		try {
			if (!textAreaRef.current) return;
			const { availdValue, validation } = blankValidation(inputValue);
			if (validation) {
				setIsLoading(true);

				const { answer } = await imageController({
					prompt: inputValue,
					n: numberValue,
					size: radioValue,
				});
				setIsLoading(false);
				setImageArray(prev => [...prev, ...answer]);
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
	const radioChecked = {
		small: SMALL_SIZE === radioValue,
		middle: MIDDLE_SIZE === radioValue,
		large: LARGE_SIZE === radioValue,
	};

	return {
		textAreaRef,
		inputValue,
		inputHandler,
		buttonHandler,
		buttonRef,
		isLoading,
		radioHandler,
		radioChecked,
		numberValue,
		numberInputHandler,
		imageArray,
		enterHandler,
	};
}
