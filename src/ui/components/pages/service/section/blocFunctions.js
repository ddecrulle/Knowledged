import React, { useEffect, useState } from 'react';
import groupBy from 'lodash.groupby';
import { GroupedFunctions } from './functions/groupedFunctions';

const BlocFunction = ({ functions, products }) => {
	const [arrayProducts, setArrayProducts] = useState([]);

	const getLabelProduct = (products, idProduct) => {
		const product = products.find((p) => p.id === idProduct);
		return product ? product.label : 'NotAvailable';
	};

	useEffect(() => {
		if (products) setArrayProducts(products['children']);
	}, [products]);

	return Object.values(groupBy(functions, (fct) => fct.idProduct)).map(
		(groupedFunctions) => {
			const idProduct = groupedFunctions[0].idProduct;
			const labelProduct = getLabelProduct(arrayProducts, idProduct);
			return (
				<GroupedFunctions
					groupedFunctions={groupedFunctions}
					labelProduct={labelProduct}
					key={idProduct}
				/>
			);
		}
	);
};

export default BlocFunction;
