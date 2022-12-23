import React from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';

export const Function = ({ fct }) => {
	const { classes } = useStyles();

	return (
		<div key={fct.id}>
			<Typography variant='subtitle1' textTransform='uppercase' color='grey'>
				{fct['gsbpm']['label']}
			</Typography>

			<ul>
				<li>
					<Typography
						variant='subtitle1'
						textTransform='uppercase'
						className={classes.fctLabel}
					>
						{fct['label']}
					</Typography>
					<Typography variant='body1' color='GrayText'>
						{fct['description']}
					</Typography>
				</li>
			</ul>
		</div>
	);
};

const useStyles = makeStyles()(() => ({
	fctLabel: {},
}));
