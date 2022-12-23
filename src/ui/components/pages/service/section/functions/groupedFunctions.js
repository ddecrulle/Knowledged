import React from 'react';
import { Function } from './function';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import Divider from '@mui/material/Divider';

export const GroupedFunctions = ({ groupedFunctions, labelProduct, key }) => {
	const { classes } = useStyles();

	return (
		<div key={key}>
			<Divider component='div' className={classes.titleDivider} />
			<Typography className={classes.productTitle} variant='h4'>
				{labelProduct}
			</Typography>
			{groupedFunctions.map((fct) => (
				<Function fct={fct} key={fct.id} />
			))}
		</div>
	);
};

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
		display: 'table-caption',
	},
}));
