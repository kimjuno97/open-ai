import styled from 'styled-components';

interface TImageBox {
	imageArray: Array<string>;
}

export default function ImageBox({ imageArray }: TImageBox) {
	if (imageArray.length === 0) return null;

	return (
		<ImageBoxContainer>
			{imageArray.map((src, idx) => (
				<ImageContainer key={idx}>
					<Image
						src={src}
						alt={`image${idx}`}
					/>
				</ImageContainer>
			))}
		</ImageBoxContainer>
	);
}

const ImageBoxContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
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
`;

const ImageContainer = styled.div`
	width: 500px;
	height: 500px;
`;

const Image = styled.img`
	width: inherit;
	height: inherit;
`;
