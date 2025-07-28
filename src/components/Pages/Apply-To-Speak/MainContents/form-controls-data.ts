export const formControlsSpeakerData = [
	{ labelText: 'First Name:', type: 'text', name: 'firstName', required: true },
	{ labelText: 'Last Name:', type: 'text', name: 'lastName', required: true },
	{ labelText: 'Email:', type: 'email', name: 'email', required: true },
	{
		labelText: 'Country Code:',
		type: 'tel',
		name: 'countryCode',
		required: true,
		placeholder: '+61'
	},
	{ labelText: 'Mobile Number:', type: 'tel', name: 'mobileNumber', required: true }
];

export const formControlsJobData = [
	{ labelText: 'Job Title:', type: 'text', name: 'jobTitle', required: true },
	{ labelText: 'Company Name:', type: 'text', name: 'companyName', required: true },
	{ labelText: 'Company Bio:', type: 'text', name: 'companyBio', required: true },
	{ labelText: 'Speaker Bio:', type: 'text', name: 'speakerBio', required: true },
	{ labelText: 'Speech Topic:', type: 'text', name: 'speechTopic', required: false }
];
