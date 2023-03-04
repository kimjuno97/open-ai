import client from './axios';

interface TopenAiRequest {
	content: string;
}

export interface TchatProperty {
	content: string;
	role: 'system' | 'user' | 'assistant';
}

interface TopenAiRespose {
	answer: TchatProperty;
}

const openAiController = async ({
	content,
}: TopenAiRequest): Promise<TopenAiRespose> => {
	const { data }: { data: TopenAiRespose } = await client.post('/', {
		content,
	});
	console.log('response 확인', data);
	return data;
};
export default openAiController;
