import client from './axios';

export interface TchatProperty {
	role: 'system' | 'user' | 'assistant';
	content: string;
}

interface TopenAiRespose {
	answer: TchatProperty;
}

const chatController = async ({
	messages,
}: {
	messages: TchatProperty[];
}): Promise<TopenAiRespose> => {
	const { data }: { data: TopenAiRespose } = await client.post('/chat', {
		messages,
	});

	return data;
};
export default chatController;
