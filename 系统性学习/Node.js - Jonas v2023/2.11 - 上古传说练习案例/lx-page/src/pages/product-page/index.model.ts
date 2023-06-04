import { ProductItemProps } from '../index-page/index.model';

export interface ReqProductItemProps {
	loading?: boolean;
	data?: ProductItemProps;
	[keyname: string]: any;
}
