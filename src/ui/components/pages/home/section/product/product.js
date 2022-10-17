import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ApplicationCard from './applicationCard';
import { makeStyles } from 'tss-react/mui';
import CloudIcon from '@mui/icons-material/Cloud';
import Card from '@mui/material/Card';

const Product = ({ titleProducs, applications }) => {
	const { classes } = useStyles();
	return (
		<Card className={classes.paper} data-aos='zoom-in-up' data-aos-delay='200'>
			<Typography variant='h3' align='center' className={classes.title}>
				{titleProducs}
			</Typography>
			<Grid
				container
				direction='row'
				justifyContent='center'
				alignItems='center'
				spacing={4}
			>
				{applications.map((element) => (
					<Grid item xs={8} sm={6} key={element.headline}>
						<ApplicationCard
							Icon={<CloudIcon style={{ fontSize: 30 }} />}
							color='#2d21ea'
							headline={element.label}
							text={element.label}
						/>
					</Grid>
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
	};
});
