import client from './axios';

export type TImageSize = '256x256' | '512x512' | '1024x1024';

export interface TImageProperty {
	prompt: string;
	n: number;
	size: TImageSize;
}

interface TopenAiRespose {
	answer: Array<string>;
}
const imageController = async ({
	prompt,
	n,
	size,
}: TImageProperty): Promise<TopenAiRespose> => {
	const { data }: { data: TopenAiRespose } = await client.post('/image', {
		prompt,
		n,
		size,
	});

	return data;
};

export default imageController;
