import React from 'react';
import groupBy from 'lodash.groupby';
import { GroupedFunctions } from './functions/groupedFunctions';
//import { makeStyles } from 'tss-react/mui';

const BlocFunction = ({ functions }) => {
	//const { classes, theme } = useStyles();

	return Object.values(groupBy(functions, (fct) => fct.idProduct)).map(
		(groupedFunctions) => (
			<GroupedFunctions groupedFunctions={groupedFunctions} />
		)
	);
};

//const useStyles = makeStyles()((theme) => ({}));

export default BlocFunction;
