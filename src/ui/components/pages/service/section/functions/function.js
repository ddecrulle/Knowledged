import React from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const getDispoFiled = (dispo) =>
	dispo ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />;

export const Function = ({ fct, color }) => {
	const { description, label, dispo } = fct;
	const { classes } = useStyles({ color });
	return (
		<li className={classes.li}>
			<Typography
				variant='subtitle1'
				textTransform='uppercase'
				className={classes.fctLabel}
			>
				{label}
			</Typography>
			<Typography variant='body1' color='GrayText'>
				{description}
			</Typography>
			<ul className={classes.ulAppli}>
				{fct.products.map((p) => (
					<li key={p.id}>
						<Typography
							textTransform='uppercase'
							variant='body2'
							color='GrayText'
						>
							{p.label}
						</Typography>
						{getDispoFiled(dispo)}
					</li>
				))}
			</ul>
		</li>
	);
};

const useStyles = makeStyles()((theme, { color }) => ({
	li: {
		marginBottom: theme.spacing(1),
	},
	ulAppli: {
		listStyleType: 'disclosure-closed',
		color: color,
	},
}));
