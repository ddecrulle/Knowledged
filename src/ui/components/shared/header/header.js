import React, { useState, memo } from 'react';
import { makeStyles } from 'tss-react/mui';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuIcon from '@mui/icons-material/Menu';
import GithubIcon from '@mui/icons-material/GitHub';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import logo from 'ui/components/assets/img/logo.svg';
import { Menu, SecondaryMenu } from 'ui/components/constants/menu';
import { Link, useLocation } from 'react-router-dom';
import { Link as MaterialLink } from '@mui/material';

const Header = () => {
	const location = useLocation();

	const [open, setOpen] = useState(false);
	const { classes } = useStyles();

	return (
		<AppBar position='static' color='default' className={classes.appBar}>
			<Toolbar>
				<Grid container spacing={10} alignItems='baseline'>
					<Grid item xs={12} className={classes.flex}>
						<div className={classes.inline}>
							<Typography variant='h6' color='inherit' noWrap>
								<Link to='/' className={classes.link}>
									<img width={40} src={logo} alt='logo' />
									<span className={classes.tagline}>Knowledge</span>
								</Link>
							</Typography>
						</div>
						<>
							<div className={classes.productLogo}>
								<Typography>Métallica</Typography>
							</div>
							<Box className={classes.iconContainer}>
								<IconButton
									onClick={() => setOpen(true)}
									className={classes.iconButton}
									color='inherit'
									aria-label='Menu'
								>
									<MenuIcon />
								</IconButton>
							</Box>
							<div className={classes.tabContainer}>
								<SwipeableDrawer
									anchor='right'
									open={open}
									onClose={() => setOpen(false)}
									onOpen={() => setOpen(true)}
								>
									<AppBar title='Menu' />
									<List className={classes.swipeableList}>
										{Menu.map((item) => (
											<ListItemButton
												component={item.external ? MaterialLink : Link}
												href={item.external ? item.pathname : null}
												to={item.external ? null : item.pathname}
												onClick={() => setOpen(false)}
												disabled={item.disabled}
												key={item.label}
											>
												<ListItemText primary={item.label} />
											</ListItemButton>
										))}
										<Divider />
									</List>
									<List>
										{SecondaryMenu.map((item) => (
											<ListItemButton
												component={item.external ? MaterialLink : Link}
												href={item.external ? item.pathname : null}
												to={item.external ? null : item.pathname}
												disabled={item.disabled}
												key={item.label}
												target={item.external ? '_blank' : null}
												rel={item.external ? 'noopener' : null}
											>
												<ListItemText primary={item.label} />
											</ListItemButton>
										))}
										<Divider />
									</List>
								</SwipeableDrawer>
								<Tabs value={location.pathname}>
									{Menu.map((item) => (
										<Tab
											className={classes.tab}
											key={`primary-${item.label}`}
											value={item.pathname}
											LinkComponent={item.external ? MaterialLink : Link}
											href={item.external ? item.pathname : null}
											to={item.external ? null : item.pathname}
											label={item.label}
											disabled={item.disabled}
										/>
									))}
								</Tabs>
								<Tabs
									indicatorColor='primary'
									textColor='primary'
									value={0}
									TabIndicatorProps={{
										style: {
											display: 'none',
										},
									}}
								>
									{SecondaryMenu.map((item) => (
										<Tab
											className={classes.tab}
											key={`secondary-${item.label}`}
											LinkComponent={item.external ? MaterialLink : Link}
											href={item.external ? item.pathname : null}
											to={item.external ? null : item.pathname}
											disabled={item.disabled}
											target={item.external ? '_blank' : null}
											label={
												<div>
													{item.label}{' '}
													{item.icon === 'github' && (
														<GithubIcon className={classes.githubIcon} />
													)}
												</div>
											}
										/>
									))}
								</Tabs>
							</div>
						</>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

const useStyles = makeStyles()((theme) => {
	return {
		appBar: {
			position: 'relative',
			boxShadow: 'none',
			borderBottom: `1px solid ${theme.palette.grey['100']}`,
			backgroundColor: 'white',
		},
		inline: {
			display: 'inline',
		},
		flex: {
			display: 'flex',
			alignItems: 'center',
		},
		link: {
			textDecoration: 'none',
			color: 'inherit',
		},
		productLogo: {
			display: 'inline-block',
			borderLeft: `1px solid ${theme.palette.grey['A400']}`,
			marginLeft: 32,
			paddingLeft: 24,
		},
		tagline: {
			display: 'inline-block',
			marginLeft: 10,
		},
		iconContainer: {
			display: 'none',
			[theme.breakpoints.down('md')]: {
				display: 'flex',
				justifyContent: 'flex-end',
				flexGrow: 1,
			},
		},
		iconButton: {
			float: 'right',
		},
		tabContainer: {
			marginLeft: 32,
			display: 'flex',
			flexGrow: 1,
			justifyContent: 'space-between',
			[theme.breakpoints.down('md')]: {
				display: 'none',
			},
		},
		tab: {
			textTransform: 'none',
		},
		githubIcon: { marginLeft: 5, verticalAlign: 'sub' },
		swipeableList: {
			padding: 0,
		},
	};
});
export default memo(Header);
