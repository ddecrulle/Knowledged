import React from 'react';
import { Function } from './function';
//import { makeStyles } from 'tss-react/mui';

export const FunctionsByGSBPM = ({ productFunctions }) => {
	//const { classes } = useStyles();

	return (
		<>
			{productFunctions.map((fct) => (
				<Function fct={fct} key={fct.id} />
			))}
		</>
	);
};

//const useStyles = makeStyles()((theme) => ({}));
