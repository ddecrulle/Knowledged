import React, { useEffect, useState } from 'react';
import groupBy from 'lodash.groupby';
import { FunctionsByProducts } from './functions/functionsByProducts';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import Divider from '@mui/material/Divider';

const BlocFunction = ({ functions, products }) => {
	const { classes } = useStyles();

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
				<div key={idProduct} className={classes.productFunctions}>
					<Divider component='div' className={classes.titleDivider} />
					<Typography className={classes.productTitle} variant='h4'>
						{labelProduct}
					</Typography>
					<FunctionsByProducts
						productFunctions={groupedFunctions}
						labelProduct={labelProduct}
					/>
				</div>
			);
		}
	);
};

export default BlocFunction;

const useStyles = makeStyles()((theme) => ({
	titleDivider: {
		width: theme.spacing(6),
		borderWidth: '3px',
		backgroundColor: '#4cbee2',
		borderRadius: '10px',
	},
	productTitle: {
		fontWeight: 500,
		textTransform: 'uppercase',
		marginBottom: theme.spacing(6),
		marginLeft: theme.spacing(4),
	},
	productFunctions: { marginBottom: theme.spacing(6) },
}));
