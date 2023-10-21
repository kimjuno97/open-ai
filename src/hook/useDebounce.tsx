import React, { useState } from 'react';

import papagoTranslationController, {
	TPapagoTranslationController,
} from '@/controller/papagoController';

export default function useDebounce() {
	const [timer, setTimer] = useState<NodeJS.Timeout>();
	const [controllerFun, setControllerFun] = useState<TPapagoTranslationController | null>(null);

	const debouncing = (
		e: React.ChangeEvent<HTMLTextAreaElement>,
		setTranslationValue: React.Dispatch<React.SetStateAction<string>>
	) => {
		if (!controllerFun) return;

		if (timer) {
			clearInterval(timer);
		}
		const delay = setTimeout(async () => {
			if (e.target.value.length === 0) return;
			const { answer } = await papagoTranslationController({
				text: e.target.value,
				source: 'ko',
				target: 'en',
			});
			setTranslationValue(answer);
		}, 500);
		setTimer(delay);
	};
	return { debouncing, setControllerFun };
}
