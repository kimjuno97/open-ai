import axios from 'axios';

export interface TPapagoProperty {
	text: string;
	source: string;
	target: string;
}

const papagoController = async ({ text, source, target }: TPapagoProperty) => {
	const { data } = await axios.post('/api/papago', {
		text,
		source,
		target,
	});
	console.log('da ', data);
	return data;
};

export default papagoController;
