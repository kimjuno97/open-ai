import { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface TAnswerBoxProps {
	answerArray: Array<string>;
}

export default function AnswerBox({ answerArray }: TAnswerBoxProps) {
	const containerRef = useRef<HTMLElement>(null);
	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.scrollTop = containerRef.current.scrollHeight;
		}
	}, [answerArray]);
	return (
		<Container ref={containerRef}>
			{answerArray.map((answer, index) => (
				<Div key={index}>{answer}</Div>
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
		padding: 10px;
		background: #434654;
		text-align: center;
	}

	div:nth-child(odd) {
		width: 100%;
		padding: 10px;
		background: #343541;
		text-align: center;
	}
`;

const Div = styled.div``;
