import React from 'react';
import WaveBorder from 'ui/components/shared/waveBorder';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles()((theme, { upperColor }) => {
	return {
		footer: {
			backgroundColor: upperColor,
		},
		waveBorder: {},
		footerInner: {
			textAlign: 'center',
			backgroundColor: theme.palette.common.darkBlack,
			paddingTop: theme.spacing(8),
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(2),
			paddingBottom: theme.spacing(6),
			[theme.breakpoints.up('sm')]: {
				paddingTop: theme.spacing(10),
				paddingLeft: theme.spacing(16),
				paddingRight: theme.spacing(16),
				paddingBottom: theme.spacing(10),
			},
			[theme.breakpoints.up('md')]: {
				paddingTop: theme.spacing(10),
				paddingLeft: theme.spacing(10),
				paddingRight: theme.spacing(10),
				paddingBottom: theme.spacing(10),
			},
		},
		text: {
			color: theme.palette.common.white,
		},
	};
});

const Footer = ({ upperColor = '#FFFFFF' }) => {
	const { classes, theme } = useStyles(upperColor);
	return (
		<footer className={classes.footer}>
			<WaveBorder
				upperColor={upperColor}
				lowerColor={theme.palette.common.darkBlack}
				animationNegativeDelay={4}
			/>
			<div className={classes.footerInner}>
				<Typography variant='h6' paragraph className={classes.text}>
					Insee - Knowledge
				</Typography>
			</div>
		</footer>
	);
};

export default Footer;
