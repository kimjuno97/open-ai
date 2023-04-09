import styled, { keyframes } from 'styled-components';

export function Spiner() {
	return (
		<SpinerDiv>
			<svg className="svg">
				<circle className="circle" cx="50%" cy="50%" r="25%" />
			</svg>
		</SpinerDiv>
	);
}

const LoadingSpin = keyframes`
    100% {
		transform: rotate(360deg);
	}
`;

const LoadingCircleAnimation = keyframes`
	0% {
		stroke-dashoffset: 157;
	}
	75% {
		stroke-dashoffset: -147;
	}
	100% {
		stroke-dashoffset: 157;
	}
`;

const SpinerDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.5s;

	.svg {
		width: 23px;
		height: 40px;
		animation: ${LoadingSpin} 3s infinite;
	}

	.circle {
		stroke: black;
		stroke-width: 4;
		stroke-dasharray: 157 157;
		stroke-dashoffset: 0;
		fill: none;
		animation: ${LoadingCircleAnimation} 1s infinite;
	}
`;
