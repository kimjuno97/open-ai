import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CodeBlock } from './CodeBlock';
import { TchatProperty } from '@/controller/openAiControlloer';

interface TAnswerBoxProps {
	answerArray: TchatProperty[];
}

export default function AnswerBox({ answerArray }: TAnswerBoxProps) {
	const containerRef = useRef<HTMLElement>(null);
	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.scrollTop = containerRef.current.scrollHeight;
		}
	}, [answerArray]);
	const code = `function greet(name) {
        console.log('Hello, ' + name + '!');
      }`;
	return (
		<Container ref={containerRef}>
			<CodeBlock
				language='javascript'
				value={code}
			/>

			{answerArray.map(({ content }, index) => (
				<Div key={index}>{content}</Div>
			))}
		</Container>
	);
}

const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 10px 0px;
	color: white;
	overflow: scroll;

	div:nth-child(even) {
		width: 100%;
		padding: 10% 15%;
		background: #434654;
		text-align: center;
	}

	div:nth-child(odd) {
		width: 100%;
		padding: 10% 15%;
		background: #343541;
		text-align: center;
	}
`;

const Div = styled.div``;
