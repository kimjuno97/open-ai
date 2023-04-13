import axios, { AxiosRequestConfig } from 'axios';

export async function POST(request: Request) {
	console.log('post data ', request);
	const reqData: AxiosRequestConfig = {
		headers: {
			'User-Agent': 'curl/7.49.1',
			Accept: ' */*',
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
			'X-Naver-Client-Id': process.env.NEXT_PUBLIC_NAVER_CLIENT,
			'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET,
			'Content-Length': 51,
		},
		data: { source: 'ko', target: 'en', text: '안녕' },
	};

	const { data } = await axios.post('https://openapi.naver.com/v1/papago/n2mt', { ...reqData });

	return new Response(data, {
		status: 200,
	});
}
