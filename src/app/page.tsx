'use client';
import styled from 'styled-components';

import Image from 'next/image';

import KaKaoAdFit from '@/components/KaKaoAdFit';
import IFrameReject from '@/components/IFrameReject';

import chat from '../../public/chat.svg';
import image from '../../public/image.svg';
import { useRouter } from 'next/navigation';

/**
 * 해야할것들
 * 4. 광고 달기
 */

export default function Home() {
	const router = useRouter();

	const routerHandler = (path: string) => () => {
		router.push(path);
	};
	IFrameReject();
	return (
		<Container>
			<KaKaoAdFit
				style={{ position: 'absolute', top: 0 }}
				unit='DAN-r4fdMlSkfm0J8ESF'
				width='728'
				height='90'
			/>

			<ImageContainer>
				<ImageBox onClick={routerHandler('/chat')}>
					<Image
						src={chat}
						alt='chat'
					/>
					<P>gpt-3.5 Turbo</P>
				</ImageBox>
				<ImageBox onClick={routerHandler('/image')}>
					<Image
						src={image}
						alt='image'
					/>
					<P>Image generation</P>
				</ImageBox>
			</ImageContainer>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: #434655;
`;

const ImageContainer = styled.div`
	display: flex;
	gap: 50px;
`;

const ImageBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 300px;
	height: 300px;
	background: #777a8a;
	border-radius: 50%;
	transition: 1.2s;
	cursor: pointer;
	:hover {
		transform: scale(120%, 120%);
	}
`;

const P = styled.p`
	font-size: 20px;
`;
