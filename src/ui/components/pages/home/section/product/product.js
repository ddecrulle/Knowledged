import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ApplicationCard from './applicationCard';
import { makeStyles } from 'tss-react/mui';
import CloudIcon from '@mui/icons-material/Cloud';
import Card from '@mui/material/Card';

const Product = ({ titleProducts, applications }) => {
	const { classes } = useStyles();
	return (
		<Card className={classes.paper} data-aos='zoom-in-up' data-aos-delay='200'>
			<Typography variant='h3' align='center' className={classes.title}>
				{titleProducts}
			</Typography>
			<Grid
				container
				spacing={{ xs: 2, md: 4 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{applications.map((element) => (
					<ApplicationCard
						Icon={<CloudIcon style={{ fontSize: 30 }} />}
						color='#2d21ea'
						headline={element.label}
						text={element.label}
					/>
				))}
			</Grid>
		</Card>
	);
};

export default Product;

const useStyles = makeStyles()((theme) => {
	return {
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
		applicationContainer: {
			display: 'flex',
		},
	};
});
