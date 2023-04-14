import axios, { AxiosRequestConfig } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(request: NextApiRequest, response: NextApiResponse) {
	try {
		console.log('check', request);

		const reqData = {
			source: 'ko',
			target: 'en',
			text: '안녕',
		};

		const headers: AxiosRequestConfig = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
				'X-Naver-Client-Id': process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
				'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET,
			},
		};

		const { data } = await axios.post('https://openapi.naver.com/v1/papago/n2mt', reqData, headers);

		return response.status(200).json({ data });
	} catch (err) {
		return err;
	}
}
