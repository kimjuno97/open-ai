import React, { ReactElement } from 'react';
import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentInitialProps,
	DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// NEXT.JS CUSTOM DOCUMENT
// https://nextjs.org/docs/advanced-features/custom-document

export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					// collectStyles는 앱의 컴포넌트에서 모든 스타일을 수집합니다.
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: [
					<>
						{initialProps.styles}
						{/** sheets.getElement()는 스타일 태그를 생성하고 이를 스타일이라는 프로퍼티로 반환해야 합니다. */}
						{sheet.getStyleElement()}
					</>,
				],
			};
		} finally {
			sheet.seal();
		}
	}

	// render(): ReactElement {
	// 	return (
	// 		<Html lang='ko'>
	// 			<Head>SOME HEAD ELEMENTS</Head>
	// 			<body>
	// 				<Main />
	// 				<NextScript />
	// 			</body>
	// 		</Html>
	// 	);
	// }
}
