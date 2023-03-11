import client from './axios';

const imageController = async () => {
	const { data } = await client('/image');

	return data;
};

export default imageController;
