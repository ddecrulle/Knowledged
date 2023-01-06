import React from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import { Chip } from '@mui/material';

export const Function = ({ fct }) => {
	const { classes } = useStyles();
	return (
		<li className={classes.li}>
			<Typography
				variant='subtitle1'
				textTransform='uppercase'
				className={classes.fctLabel}
			>
				{fct['label']}
			</Typography>
			<Typography
				variant='body1'
				color='GrayText'
				className={classes.descriptionText}
			>
				{fct['description']}
			</Typography>
			{fct.products.map((p) => (
				<Chip
					key={p.id}
					className={classes.chip}
					label={p.label}
					color='secondary'
				/>
			))}
		</li>
	);
};

const useStyles = makeStyles()((theme) => ({
	li: {
		marginBottom: theme.spacing(1),
	},
	descriptionText: {
		//marginBottom: theme.spacing(1),
	},
	chip: {
		marginTop: theme.spacing(1),
		marginRight: theme.spacing(0.5),
	},
}));
