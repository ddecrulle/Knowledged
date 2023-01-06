import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { makeStyles } from 'tss-react/mui';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

const ApplicationCard = ({ Icon, color, headline, text, id }) => {
	const { classes } = useStyles({ color });
	//TODO add expanded with parents
	return (
		<Grid item xs={2} sm={4} md={4}>
			<div className={classes.iconWrapper}>{Icon}</div>
			<Typography variant='h5' paragraph>
				{headline}
				<IconButton component={Link} to={`/services?selected=${id}`}>
					<InfoIcon />
				</IconButton>
			</Typography>
			<Typography variant='body1' color='textSecondary'>
				{text}
			</Typography>
		</Grid>
	);
};

export default ApplicationCard;

const useStyles = makeStyles()((theme, { color }) => {
	return {
		wrapper: {
			backgroundColor: theme.palette.common.white,
		},
		iconWrapper: {
			color: color,
			backgroundColor: shadeColor(color, 0.5),
			fill: color,
			borderRadius: theme.shape.borderRadius,
			textAlign: 'center',
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			marginBottom: theme.spacing(3),
			padding: theme.spacing(1.5),
		},
	};
});

function shadeColor(hex, percent) {
	const f = parseInt(hex.slice(1), 16);
	const t = percent < 0 ? 0 : 255;
	const p = percent < 0 ? percent * -1 : percent;
	const R = f >> 16;
	const G = (f >> 8) & 0x00ff;
	const B = f & 0x0000ff;
	return `#${(
		0x1000000 +
		(Math.round((t - R) * p) + R) * 0x10000 +
		(Math.round((t - G) * p) + G) * 0x100 +
		(Math.round((t - B) * p) + B)
	)
		.toString(16)
		.slice(1)}`;
}
