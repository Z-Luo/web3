import React, { useState } from 'react';

const useHandleInputChange = (initialState: IApplyToSpeakProps) => {
	const [state, setState] = useState<IApplyToSpeakProps>(initialState);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		const { name, type, value, checked } = event.target;
		setState((prevState: IApplyToSpeakProps) => ({
			...prevState,
			[name]: type === 'checkbox' ? checked : value
		}));
	};

	return {
		state,
		handleInputChange
	};
};

export default useHandleInputChange;
