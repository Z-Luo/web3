const hasEmptyValues = (object: IApplyToSpeakProps): boolean => {
	return Object.values(object).some(value => value === '' || value === undefined);
};
export default hasEmptyValues;
