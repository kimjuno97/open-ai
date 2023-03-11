import client from './axios';

export interface TchatProperty {
	role: 'system' | 'user' | 'assistant';
	content: string;
}

interface TChatRespose {
	answer: TchatProperty;
}

const chatController = async ({
	messages,
}: {
	messages: TchatProperty[];
}): Promise<TChatRespose> => {
	const { data }: { data: TChatRespose } = await client.post('/chat', {
		messages,
	});

	return data;
};
export default chatController;
