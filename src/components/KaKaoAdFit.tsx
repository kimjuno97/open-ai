'use client';
import React, { CSSProperties, useEffect, useRef } from 'react';

interface TKakaoAdFit {
	unit: string;
	width: string;
	height: string;
	style?: CSSProperties;
}

function KakaoAdFit({ unit, width, height, style = {} }: TKakaoAdFit) {
	// 최초 1회만 광고를 불러오기 위한 변수
	const adRef = useRef<boolean>(false);

	useEffect(() => {
		// 로딩된 광고가 있으면, 추가 로딩 X
		if (adRef.current) {
			return;
		}

		const ins = document.createElement('ins');
		const script = document.createElement('script');

		ins.className = 'kakao_ad_area';
		ins.style.display = 'none;';

		ins.setAttribute('data-ad-width', width);
		ins.setAttribute('data-ad-height', height);
		ins.setAttribute('data-ad-unit', unit);

		script.async = true;
		script.type = 'text/javascript';
		script.src = '//t1.daumcdn.net/kas/static/ba.min.js';

		document.querySelector('.aside__kakaoAdFit')?.appendChild(ins);
		document.querySelector('.aside__kakaoAdFit')?.appendChild(script);

		// 광고 로딩 여부 상태 변경
		adRef.current = true;
	}, [height, unit, width]);
	return (
		<>
			<aside style={style} className="aside__kakaoAdFit" />
		</>
	);
}

export default React.memo(KakaoAdFit);
