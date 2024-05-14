export interface Iproduct {
	id?: string | undefined;
	title: string;
	description: string;
	imageURL: string;
	price: string;
	color: string[];
	category: {
		name: string;
		iamgeURL: string;
	};
}
export interface Iinputs {
	id: string;
	name: string;
	label: string;
	type: string;
}
