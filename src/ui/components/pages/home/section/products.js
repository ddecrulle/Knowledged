import React, { memo } from 'react';
import products from 'core/mockData/hierarchy/products';
import Product from './product/product';
import { makeStyles } from 'tss-react/mui';

const Products = () => {
	const { classes } = useStyles();

	return (
		<div className={classes.container}>
			{products.children.map((p) => (
				<div className={classes.product}>
					<Product titleProducs={p.label} applications={p.children} />
				</div>
			))}
		</div>
	);
};

export default memo(Products);

const useStyles = makeStyles()((theme) => {
	return {
		container: {
			padding: `${theme.spacing(12)} 0`,
			[theme.breakpoints.down('md')]: {
				padding: `${theme.spacing(9)} 0`,
			},
			[theme.breakpoints.down('sm')]: {
				padding: `${theme.spacing(6)} 0`,
			},
			[theme.breakpoints.down('xs')]: {
				padding: `${theme.spacing(3)} 0`,
			},
		},
		product: {
			padding: `${theme.spacing(6)} ${theme.spacing(9)}`,
			[theme.breakpoints.down('md')]: {
				padding: `${theme.spacing(9)} ${theme.spacing(6)}`,
			},
			[theme.breakpoints.down('sm')]: {
				paddingBottom: `${theme.spacing(6)} ${theme.spacing(3)}`,
			},
			[theme.breakpoints.down('xs')]: {
				paddingBottom: `${theme.spacing(3)} ${theme.spacing(1)}`,
			},
		},
	};
});
