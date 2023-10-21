import client from './axios';

/**
 * type 추가시 참고
 * https://developers.naver.com/docs/papago/papago-nmt-api-reference.md
 */
type Ttranslation = 'ko' | 'en';
export interface TPapagoTranslationProperty {
	text: string;
	source: Ttranslation;
	target: Ttranslation;
}

interface TPapagoTranslationResponse {
	answer: string;
}

export interface TPapagoTranslationController {
	(reqestData: TPapagoTranslationProperty): Promise<TPapagoTranslationResponse>;
}

const papagoTranslationController: TPapagoTranslationController = async ({
	text,
	source,
	target,
}) => {
	const { data } = await client.post('/papago', {
		text,
		source,
		target,
	});
	console.log('da ', data);
	return data;
};

export default papagoTranslationController;
