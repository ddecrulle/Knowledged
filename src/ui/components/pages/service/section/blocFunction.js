import { Box, Card } from '@mui/material';
import React, { useEffect } from 'react';
import { makeStyles } from 'tss-react/mui';

const BlocFunction = ({ functions }) => {
	useEffect(() => {
		console.log(functions);
	}, [functions]);

	const { classes, theme } = useStyles();

	return <div>Functions</div>;
};

const useStyles = makeStyles()((theme) => ({
	box: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		minWidth: 50,
	},
	card: {
		boxShadow: theme.shadows[4],
		[theme.breakpoints.up('xs')]: {
			paddingTop: theme.spacing(1),
			paddingBottom: theme.spacing(1),
			paddingLeft: theme.spacing(1),
			paddingRight: theme.spacing(1),
		},
		[theme.breakpoints.up('sm')]: {
			paddingTop: theme.spacing(2),
			paddingBottom: theme.spacing(2),
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(2),
		},
		[theme.breakpoints.up('md')]: {
			paddingTop: theme.spacing(3),
			paddingBottom: theme.spacing(3),
			paddingLeft: theme.spacing(3),
			paddingRight: theme.spacing(3),
		},
		[theme.breakpoints.up('lg')]: {
			paddingTop: theme.spacing(4),
			paddingBottom: theme.spacing(4),
			paddingLeft: theme.spacing(4),
			paddingRight: theme.spacing(4),
		},
		maxWidth: 1280,
		width: '100%',
	},
}));

export default BlocFunction;
