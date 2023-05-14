import React, { memo } from 'react';
import WaveBorder from 'ui/components/shared/waveBorder';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import version from 'core/version';

const Footer = () => {
	const { classes, theme } = useStyles();
	return (
		<footer>
			<WaveBorder
				upperColor={theme.palette.background.default}
				lowerColor={theme.palette.background.bleu}
				animationNegativeDelay={4}
			/>
			<div className={classes.footerInner}>
				<Typography variant='h6' paragraph className={classes.text}>
					Insee - Knowledge v{version}
				</Typography>
			</div>
		</footer>
	);
};

const useStyles = makeStyles()((theme) => {
	return {
		footerInner: {
			textAlign: 'center',
			backgroundColor: theme.palette.background.bleu,
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
export default memo(Footer);
