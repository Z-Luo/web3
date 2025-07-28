interface AddressComponent {
	long_name: string;
	short_name: string;
	types: string[];
}

interface GeocodeResult {
	address_components: AddressComponent[];
}
