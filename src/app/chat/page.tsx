'use client';

import { AnswerBox, IFrameReject, Layout, Spiner } from '@/components';
import { Button, Form, TextArea } from '@/styledComponents';

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

	IFrameReject();

	return (
		<>
			<Layout>
				<Form>
					<TextArea
						ref={textAreaRef}
						value={inputValue}
						onChange={inputHandler}
						onKeyDown={enterHandler}
						disabled={isLoading}
						autoFocus
					/>
					<Button onClick={buttonHandler} ref={buttonRef} disabled={isLoading}>
						{isLoading ? <Spiner /> : '전송'}
					</Button>
				</Form>
				<AnswerBox answerArray={answerArray} />
			</Layout>
		</>
	);
}
