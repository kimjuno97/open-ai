import client from './axios';

export interface TchatProperty {
	role: 'system' | 'user' | 'assistant';
	content: string;
}

interface TopenAiRespose {
	answer: TchatProperty;
}

const openAiController = async ({
	messages,
}: {
	messages: TchatProperty[];
}): Promise<TopenAiRespose> => {
	const { data }: { data: TopenAiRespose } = await client.post('/', {
		messages,
	});

	return data;
};
export default openAiController;
