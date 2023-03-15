import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CodeBlock } from './CodeBlock';
import { TchatProperty } from '@/controller/chatControlloer';

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

	if (answerArray.length === 0) return null;

	return (
		<Container ref={containerRef}>
			{answerArray.map(({ role, content }, index) => {
				const contentArr = content.split(/[.?]/).join('\n');
				if (content.includes('```')) {
					const regex = /```[\s\S]*?```/gm;
					const code: Array<string> = content.match(regex) || [];
					const stringContent = content.replace(regex, '');
					return (
						<Div key={index}>
							{stringContent}
							{code.map((str, idx) => {
								const codeStr = str.split('```')[1];
								return (
									<CodeBlock
										key={idx}
										language='javascript'
										value={codeStr}
									/>
								);
							})}
						</Div>
					);
				}
				return (
					<Div key={index}>
						{`${role === 'user' ? 'QUESTION' : 'AI'} : ${contentArr}`}
					</Div>
				);
			})}
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

const Div = styled.div`
	white-space: pre-wrap;
`;
