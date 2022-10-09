import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ApplicationCard from './applicationCard';
import { makeStyles } from 'tss-react/mui';
import CloudIcon from '@mui/icons-material/Cloud';
import { Paper } from '@mui/material';

const Product = ({ titleProducs, applications }) => {
	const { classes } = useStyles();
	return (
		<Paper className={classes.paper} data-aos='zoom-in-up' data-aos-delay='200'>
			<Typography variant='h3' align='center' className={classes.title}>
				{titleProducs}
			</Typography>
			<div className={classes.containerFluid}>
				<Grid container spacing={4}>
					{applications.map((element) => (
						<Grid item xs={6} md={4} key={element.headline}>
							<ApplicationCard
								Icon={<CloudIcon style={{ fontSize: 30 }} />}
								color='#2d21ea'
								headline={element.label}
								text={element.label}
							/>
						</Grid>
					))}
				</Grid>
			</div>
		</Paper>
	);
};

export default Product;

const useStyles = makeStyles()((theme) => {
	return {
		lgPTop: {
			paddingTop: `${theme.spacing(10)} !important`,
			[theme.breakpoints.down('md')]: {
				paddingTop: `${theme.spacing(9)} !important`,
			},
			[theme.breakpoints.down('sm')]: {
				paddingTop: `${theme.spacing(8)} !important`,
			},
			[theme.breakpoints.down('xs')]: {
				paddingTop: `${theme.spacing(7)} !important`,
			},
		},
		paper: {
			boxShadow: 'none',
			backgroundColor: '#eeedfe',
			borderRadius: theme.spacing(2),
			width: '100%',
			padding: theme.spacing(4),
			marginRight: 'auto',
			marginLeft: 'auto',
			maxWidth: 1370,
		},
		title: {
			marginBottom: theme.spacing(5),
		},
		LgMgBottom: {
			marginBottom: `${theme.spacing(10)} !important`,
			[theme.breakpoints.down('md')]: {
				marginBottom: `${theme.spacing(9)} !important`,
			},
			[theme.breakpoints.down('sm')]: {
				marginBottom: `${theme.spacing(8)} !important`,
			},
			[theme.breakpoints.down('xs')]: {
				marginBottom: `${theme.spacing(7)} !important`,
			},
		},
	};
});
