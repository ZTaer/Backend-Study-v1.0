import React, { useState, useEffect } from 'react';
import { message as Message, Skeleton } from 'antd';
import { request } from '../../utils/common.utils';
import { ProductProps } from './index.model';

import './index.scss';

const IndexPage = (props) => {
	const {
		requestProduct = {
			url: '/api/all-data',
			// url: 'http://127.0.0.1:4523/m1/1504788-0-default/api/all-data',
			method: 'GET',
		},
	} = props;
	const [product, setProduct] = useState<ProductProps>({
		loading: false,
		data: [],
	});

	/**
	 * 异步逻辑区
	 */
	const handleAsyncRequestProduct = async (reqProps: any = {}) => {
		try {
			const {
				url = '',
				data: dataProps = {},
				method = 'GET',
			} = requestProduct;
			const propsAddData = {};

			setProduct((e) => ({
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
				setProduct((e) => ({
					...e,
					loading: false,
					data: data.data,
				}));
			} else {
				Message.error('请求失败!');
				setProduct((e) => ({
					...e,
					loading: false,
				}));
			}
		} catch {
			console.warn('handleAsyncRequestProduct error');
			Message.error('请求失败!');
			setProduct((e) => ({
				...e,
				loading: false,
			}));
		}
	};

	/**
	 * 初始化逻辑区
	 */
	useEffect(() => {
		handleAsyncRequestProduct({});
	}, []);

	return (
		<div className="index-page">
			<div className="container">
				<h1>🌽 Node Farm 🥦</h1>

				<Skeleton
					active
					loading={product.loading}
					style={{ marginTop: '3rem' }}
				>
					<div className="cards-container">
						{product.data instanceof Array &&
							product.data.map((item) => {
								const {
									id,
									productName = '',
									image = '',
									from = '',
									nutrients = '',
									quantity = '',
									price = '',
									organic = false,
									description = '',
								} = item;

								return (
									<figure className="card" key={id}>
										<div className="card__emoji">
											{image}
										</div>
										<div className="card__title-box">
											<h2 className="card__title">
												{productName}
											</h2>
										</div>

										<div className="card__details">
											{organic && (
												<div
													className={
														'card__detail-box'
													}
												>
													<h6 className="card__detail card__detail--organic">
														Organic!
													</h6>
												</div>
											)}

											<div className="card__detail-box">
												<h6 className="card__detail">
													{quantity}
												</h6>
											</div>

											<div className="card__detail-box">
												<h6 className="card__detail card__detail--price">
													{price}€
												</h6>
											</div>
										</div>

										<a
											className="card__link"
											href={`/product/${id}`}
										>
											<span>
												Detail{' '}
												<i className="emoji-right">
													👉
												</i>
											</span>
										</a>
									</figure>
								);
							})}
					</div>
				</Skeleton>
			</div>
		</div>
	);
};

export default IndexPage;
