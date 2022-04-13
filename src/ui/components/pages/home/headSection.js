import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Hidden from '@mui/material/Hidden';
import Box from '@mui/system/Box';
import picture from 'ui/components/assets/img/funny-portrait-of-a-businessman-with-many-arms-picture.jpg';
import WaveBorder from 'ui/components/shared/waveBorder/component';
import { Link } from 'react-router-dom';

const useStyles = makeStyles()((theme) => {
	return {
		row: {
			display: 'flex',
			flexWrap: 'wrap',
			marginRight: -theme.spacing(2),
			marginLeft: -theme.spacing(2),
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
			position: 'relative',
			backgroundColor: theme.palette.secondary.main,
			paddingBottom: theme.spacing(2),
			paddingTop: `${theme.spacing(4)} !important`,
			[theme.breakpoints.down('md')]: {
				paddingTop: `${theme.spacing(4)} !important`,
			},
			[theme.breakpoints.down('sm')]: {
				paddingTop: `${theme.spacing(4)} !important`,
			},
			[theme.breakpoints.down('xs')]: {
				paddingTop: `${theme.spacing(4)} !important`,
			},
		},
		image: {
			maxWidth: '100%',
			verticalAlign: 'middle',
			borderRadius: theme.shape.borderRadius,
			boxShadow: theme.shadows[4],
		},
		container: {
			width: '100%',
			paddingRight: theme.spacing(2),
			paddingLeft: theme.spacing(2),
			marginRight: 'auto',
			marginLeft: 'auto',
			maxWidth: 1370,
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(12),
			[theme.breakpoints.down('md')]: {
				marginBottom: theme.spacing(9),
			},
			[theme.breakpoints.down('sm')]: {
				marginBottom: theme.spacing(6),
			},
			[theme.breakpoints.down('sm')]: {
				marginBottom: theme.spacing(3),
			},
		},
		containerFix: {
			[theme.breakpoints.up('md')]: {
				maxWidth: 'none !important',
			},
			width: '100%',
			paddingRight: theme.spacing(4),
			paddingLeft: theme.spacing(4),
			marginRight: 'auto',
			marginLeft: 'auto',
			[theme.breakpoints.up('sm')]: {
				maxWidth: 540,
			},
			[theme.breakpoints.up('md')]: {
				maxWidth: 720,
			},
			[theme.breakpoints.up('lg')]: {
				maxWidth: 1170,
			},
		},
		waveBorder: {
			paddingTop: theme.spacing(4),
		},
	};
});

const HeadSection = () => {
	const { classes } = useStyles();
	// const { globalClasses } = globalStyles();

	return (
		<>
			<div className={classes.wrapper}>
				<div className={classes.container}>
					<Box display='flex' justifyContent='center' className={classes.row}>
						<Card
							className={classes.card}
							data-aos-delay='200'
							data-aos='zoom-in'
						>
							<Box justifyContent='space-between' className={classes.row}>
								<Grid item xs={12} md={5}>
									<Box
										display='flex'
										flexDirection='column'
										justifyContent='space-between'
										height='100%'
									>
										<Box mb={4}>
											<Typography variant={'h4'}>
												Bienvenue sur Knowledge
											</Typography>
										</Box>
										<div>
											<Box mb={2}>
												<Typography variant={'body1'} color='textSecondary'>
													Lorem ipsum dolor sit amet, consetetur sadipscing
													elitr, sed diam nonumy eirmod tempor invidunt
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
												Parcourir l'offre de service{' '}
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
							</Box>
						</Card>
					</Box>
				</div>
			</div>
			<WaveBorder
				lowerColor='#FFFFFF'
				className={classes.waveBorder}
				animationNegativeDelay={2}
			/>
		</>
	);
};

export default HeadSection;
