import { useEffect } from 'react';

export default function IFrameReject() {
	useEffect(() => {
		if (window) {
			if (window.top !== window.self) {
				console.log('window top', window.top);
				console.log('window.self', window.self);
				window.top?.location.replace(window.location.href);
			}
		}
	}, []);
}
