import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';

const IndexPage = lazy(() => import('./pages/index-page'));
const ProductPage = lazy(() => import('./pages/product-page'));
const None404Page = lazy(() => import('./pages/none-404-page'));

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<IndexPage />} />
				<Route path="/overview" element={<IndexPage />} />
				<Route path="/product" element={<IndexPage />} />
				<Route path="/product/:id" element={<ProductPage />} />
				<Route path="*" element={<None404Page />} />
			</Routes>
		</div>
	);
}

export default App;
