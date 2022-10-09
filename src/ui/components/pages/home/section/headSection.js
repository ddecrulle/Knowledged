import React, { memo } from 'react';
import { makeStyles } from 'tss-react/mui';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Hidden from '@mui/material/Hidden';
import Box from '@mui/system/Box';
import picture from 'ui/components/assets/img/funny-portrait-of-a-businessman-with-many-arms-picture.jpg';
import { Link } from 'react-router-dom';
import homePage from 'ui/components/constants/page/homePage';

const HeadSection = () => {
	const { classes } = useStyles();
	const { headSection } = homePage;
	return (
		<div className={classes.wrapper}>
			<Box display='flex' justifyContent='center' className={classes.box}>
				<Card className={classes.card} data-aos-delay='200' data-aos='zoom-in'>
					<Grid
						container
						justifyContent='space-between'
						className={classes.row}
					>
						<Grid item xs={12} md={5}>
							<Box
								display='flex'
								flexDirection='column'
								verticalAlign='middle'
								height='100%'
							>
								<Box mb={4}>
									<Typography variant={'h4'}>{headSection.title}</Typography>
								</Box>
								<div>
									<Box mb={2}>
										<Typography variant={'body1'} color='textSecondary'>
											{headSection.text}
										</Typography>
									</Box>
									<Button
										variant='contained'
										color='secondary'
										fullWidth
										className={classes.extraLargeButton}
										classes={classes.extraLargeButtonLabel}
										component={Link}
										to='services'
									>
										{headSection.buttonServiceOffer}
									</Button>
								</div>
							</Box>
						</Grid>
						<Hidden mdDown>
							<Grid item md={6}>
								<img
									alt={'programme Metallica'}
									src={picture}
									className={classes.image}
								/>
							</Grid>
						</Hidden>
					</Grid>
				</Card>
			</Box>
		</div>
	);
};

export default memo(HeadSection);

const useStyles = makeStyles()((theme) => {
	return {
		box: {
			justifyContent: 'center',
			display: 'flex',
			flexWrap: 'wrap',
		},
		extraLargeButtonLabel: {
			fontSize: theme.typography.body1.fontSize,
			[theme.breakpoints.up('sm')]: {
				fontSize: theme.typography.h6.fontSize,
			},
		},
		extraLargeButton: {
			paddingTop: theme.spacing(1.5),
			paddingBottom: theme.spacing(1.5),
			[theme.breakpoints.up('xs')]: {
				paddingTop: theme.spacing(1),
				paddingBottom: theme.spacing(1),
			},
			[theme.breakpoints.up('lg')]: {
				paddingTop: theme.spacing(2),
				paddingBottom: theme.spacing(2),
			},
		},
		card: {
			boxShadow: theme.shadows[4],
			marginLeft: theme.spacing(2),
			marginRight: theme.spacing(2),
			[theme.breakpoints.up('xs')]: {
				paddingTop: theme.spacing(3),
				paddingBottom: theme.spacing(3),
				paddingLeft: theme.spacing(2),
				paddingRight: theme.spacing(2),
			},
			[theme.breakpoints.up('sm')]: {
				paddingTop: theme.spacing(5),
				paddingBottom: theme.spacing(5),
				paddingLeft: theme.spacing(4),
				paddingRight: theme.spacing(4),
			},
			[theme.breakpoints.up('md')]: {
				paddingTop: theme.spacing(5.5),
				paddingBottom: theme.spacing(5.5),
				paddingLeft: theme.spacing(5),
				paddingRight: theme.spacing(5),
			},
			[theme.breakpoints.up('lg')]: {
				paddingTop: theme.spacing(6),
				paddingBottom: theme.spacing(6),
				paddingLeft: theme.spacing(6),
				paddingRight: theme.spacing(6),
			},
			[theme.breakpoints.down('lg')]: {
				width: 'auto',
			},
		},
		wrapper: {
			backgroundColor: theme.palette.secondary.main,
			padding: `${theme.spacing(12)} ${theme.spacing(9)}`,
			[theme.breakpoints.down('md')]: {
				padding: `${theme.spacing(9)} ${theme.spacing(6)}`,
			},
			[theme.breakpoints.down('sm')]: {
				paddingBottom: `${theme.spacing(6)} ${theme.spacing(3)}`,
			},
			[theme.breakpoints.down('xs')]: {
				paddingBottom: `${theme.spacing(3)} ${theme.spacing(1)}`,
			},
		},
		image: {
			maxWidth: '100%',
			verticalAlign: 'middle',
			borderRadius: theme.shape.borderRadius,
			boxShadow: theme.shadows[4],
		},
	};
});
