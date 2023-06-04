import React, { useState, useEffect } from 'react';
import { message as Message, Skeleton } from 'antd';
import { useParams } from 'react-router-dom';
import { request } from '../../utils/common.utils';
import { ReqProductItemProps } from './index.model';

import './index.scss';

const ProductPage = (props) => {
	const {
		requestProductItem = {
			url: '/api/find-data',
			// url: 'http://127.0.0.1:4523/m1/1504788-0-default/api/find-data',
			method: 'GET',
		},
	} = props;
	const [productItem, setProductItem] = useState<ReqProductItemProps>({
		loading: false,
		data: {
			id: 0,
			productName: '查无此产品',
			image: '',
			from: '',
			nutrients: '',
			quantity: '',
			price: '',
			organic: false,
			description: '',
		},
	});
	const { id } = useParams();

	/**
	 * 异步逻辑区
	 */
	const handleAsyncRequestProductItem = async (reqProps: any = {}) => {
		try {
			const {
				url = '',
				data: dataProps = {},
				method = 'GET',
			} = requestProductItem;
			const propsAddData = {};

			setProductItem((e) => ({
				...e,
				loading: true,
			}));

			const data = await request({
				url,
				method,
				data: {
					...dataProps,
					...reqProps,
					...propsAddData,
				},
			});

			if (data.code === 200) {
				setProductItem((e) => ({
					...e,
					loading: false,
					data: data.data,
				}));
			} else {
				Message.error('请求失败!');
				setProductItem((e) => ({
					...e,
					loading: false,
				}));
			}
		} catch {
			console.warn('handleAsyncRequestProductItem error');
			Message.error('请求失败!');
			setProductItem((e) => ({
				...e,
				loading: false,
			}));
		}
	};

	/**
	 * 初始化逻辑区
	 */
	useEffect(() => {
		handleAsyncRequestProductItem({
			id,
		});
	}, []);

	return (
		<div className="product-page">
			<div className="container">
				<h1>🌽 Node Farm 🥦</h1>

				<Skeleton
					active
					loading={productItem.loading}
					style={{ marginTop: '3rem' }}
				>
					<figure className="product">
						{productItem.data.organic && (
							<div className="product__organic NOT_ORGANIC">
								<h5>Organic</h5>
							</div>
						)}
						<a href="/overview" className="product__back">
							<span className="emoji-left">👈</span>Back
						</a>
						<div className="product__hero">
							<span className="product__emoji product__emoji--1">
								{productItem.data.image}
							</span>
							<span className="product__emoji product__emoji--2">
								{productItem.data.image}
							</span>
							<span className="product__emoji product__emoji--3">
								{productItem.data.image}
							</span>
							<span className="product__emoji product__emoji--4">
								{productItem.data.image}
							</span>
							<span className="product__emoji product__emoji--5">
								{productItem.data.image}
							</span>
							<span className="product__emoji product__emoji--6">
								{productItem.data.image}
							</span>
							<span className="product__emoji product__emoji--7">
								{productItem.data.image}
							</span>
							<span className="product__emoji product__emoji--8">
								{productItem.data.image}
							</span>
							<span className="product__emoji product__emoji--9">
								{productItem.data.image}
							</span>
						</div>
						<h2 className="product__name">
							{productItem.data.productName || '查无此产品'}
						</h2>
						<div className="product__details">
							<p>
								<span className="emoji-left">🌍</span>From{' '}
								{productItem.data.from}
							</p>
							<p>
								<span className="emoji-left">❤️</span>
								{productItem.data.nutrients}
							</p>
							<p>
								<span className="emoji-left">📦</span>
								{productItem.data.quantity}
							</p>
							<p>
								<span className="emoji-left">🏷</span>
								{productItem.data.price}€
							</p>
						</div>

						<a href="#" className="product__link">
							<span className="emoji-left">🛒</span>
							<span>Add to shopping card (PRICE€)</span>
						</a>

						<p className="product__description">
							{productItem.data.description}
						</p>
					</figure>
				</Skeleton>
			</div>
		</div>
	);
};

export default ProductPage;
