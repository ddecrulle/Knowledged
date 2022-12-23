import React from 'react';
import { Function } from './function';
import groupBy from 'lodash.groupby';
import Typography from '@mui/material/Typography';

//import { makeStyles } from 'tss-react/mui';

export const FunctionsByProducts = ({ productFunctions }) => {
	//const { classes } = useStyles();

	//  Object.values(groupBy(productFunctions, (fct) => fct.gsbpm.id)).map(
	return (
		<>
			{Object.values(groupBy(productFunctions, (fct) => fct.gsbpm.id)).map(
				(gsbpmGroupedFct) => {
					const gsbpmLabel = gsbpmGroupedFct[0]['gsbpm']['label'];
					return (
						<>
							<Typography
								variant='subtitle1'
								textTransform='uppercase'
								color='grey'
							>
								{gsbpmLabel}
							</Typography>
							<ul>
								{gsbpmGroupedFct.map((fct) => (
									<Function fct={fct} key={fct.id} />
								))}
							</ul>
						</>
					);
				}
			)}
		</>
	);
};

//const useStyles = makeStyles()((theme) => ({}));
