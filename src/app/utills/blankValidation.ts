/**
 * 공백 및 엔터 검사
 * @returns validation: boolean, availdValue: string
 */
const blankValidation = (value: string) => {
	const blank = value.trim().replace(/\n/g, '');
	return { validation: !!blank, availdValue: blank };
};

export default blankValidation;
