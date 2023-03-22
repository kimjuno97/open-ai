import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface TCodeBlockProps {
	language: string;
	value: string;
}

export function CodeBlock({ language, value }: TCodeBlockProps) {
	return (
		<div style={{ padding: '0' }}>
			<SyntaxHighlighter language={language} style={darcula}>
				{value}
			</SyntaxHighlighter>
		</div>
	);
}
