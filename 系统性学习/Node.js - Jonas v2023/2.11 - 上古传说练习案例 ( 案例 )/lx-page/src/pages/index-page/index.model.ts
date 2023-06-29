export interface ProductItemProps {
	id?: number;
	productName?: string;
	image?: string;
	from?: string;
	nutrients?: string;
	quantity?: string;
	price?: string;
	organic?: boolean;
	description?: string;
	[keyname: string]: any;
}

export interface ProductProps {
	loading?: boolean;
	data?: ProductItemProps[];
	[keyname: string]: any;
}
