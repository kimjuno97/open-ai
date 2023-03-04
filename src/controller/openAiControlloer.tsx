import client from './axios';

interface TopenAiRequest {
	content: string;
}

interface TopenAiRespose {
	answer: { content: string; role: string };
}

const openAiController = async ({
	content,
}: TopenAiRequest): Promise<TopenAiRespose> => {
	const { data }: { data: TopenAiRespose } = await client.post('/', {
		content,
	});
	return data;
};
export default openAiController;
