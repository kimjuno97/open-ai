import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CodeBlock } from './CodeBlock';
import { TchatProperty } from '@/controller/openAiControlloer';

interface TAnswerBoxProps {
	answerArray: TchatProperty[];
}

export default function AnswerBox({ answerArray }: TAnswerBoxProps) {
	const containerRef = useRef<HTMLDivElement>(null);
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

			{answerArray.map(({ role, content }, index) => (
				<Div key={index}>{`${
					role === 'user' ? 'QUESTION' : 'AI'
				} : ${content}`}</Div>
			))}
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 10px 0px;
	color: white;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 10px;
	}
	&::-webkit-scrollbar-thumb {
		height: 30%; /* 스크롤바의 길이 */
		background: #202123; /* 스크롤바의 색상 */

		border-radius: 10px;
	}
	&::-webkit-scrollbar-track {
		background: #434654; /*스크롤바 뒷 배경 색상*/
	}
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
