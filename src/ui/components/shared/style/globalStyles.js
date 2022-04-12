import { makeStyles } from 'tss-react/mui';

export const { useStyles } = makeStyles()((theme) => {
	return {
		lgPTop: {
			paddingTop: `${theme.spacing(20)} !important`,
			[theme.breakpoints.down('md')]: {
				paddingTop: `${theme.spacing(18)} !important`,
			},
			[theme.breakpoints.down('sm')]: {
				paddingTop: `${theme.spacing(16)} !important`,
			},
			[theme.breakpoints.down('xs')]: {
				paddingTop: `${theme.spacing(14)} !important`,
			},
		},
	};
});
