'use client';
import styled from 'styled-components';

import IFrameReject from '@/components/IFrameReject';
import ImageBox from '@/components/ImageBox';
import Layout from '@/components/layout';
import Spiner from '@/components/Spiner';

import useImage, { LARGE_SIZE, MIDDLE_SIZE, SMALL_SIZE } from './useImage';

export default function Page() {
	const {
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
	} = useImage();

	IFrameReject();

	return (
		<Layout>
			<Form>
				<TextArea
					ref={textAreaRef}
					value={inputValue}
					onChange={inputHandler}
					onKeyDown={enterHandler}
					autoFocus
				/>
				<Button onClick={buttonHandler} ref={buttonRef} disabled={isLoading}>
					{isLoading ? <Spiner /> : '전송'}
				</Button>
			</Form>
			<OptionsContainer>
				<RadioWrap>
					<input
						type="radio"
						id="small"
						name="small"
						value={SMALL_SIZE}
						onChange={radioHandler}
						checked={radioChecked.small}
					/>
					<Label htmlFor="small">256x256</Label>
				</RadioWrap>
				<RadioWrap>
					<input
						type="radio"
						id="middle"
						name="middle"
						value={MIDDLE_SIZE}
						onChange={radioHandler}
						checked={radioChecked.middle}
					/>
					<Label htmlFor="middle">512x512</Label>
				</RadioWrap>
				<RadioWrap>
					<input
						type="radio"
						id="large"
						name="large"
						value={LARGE_SIZE}
						onChange={radioHandler}
						checked={radioChecked.large}
					/>
					<Label htmlFor="large">1024x1024</Label>
				</RadioWrap>
				<NumberInput
					type="number"
					value={numberValue}
					onChange={numberInputHandler}
					min={1}
					max={2}
				/>
			</OptionsContainer>
			<ImageBox imageArray={imageArray} />
		</Layout>
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

const OptionsContainer = styled.div`
	display: flex;
	gap: 20px;
`;

const RadioWrap = styled.div`
	display: flex;
	gap: 5px;
`;

const Label = styled.label`
	color: white;
`;

const NumberInput = styled.input`
	width: 30px;
`;
