import React from 'react';
//import { makeStyles } from 'tss-react/mui';

const BlocFunction = ({ functions }) => {
	//const { classes, theme } = useStyles();

	return functions.map((fct) => (
		<div key={fct.id}>
			<h1>{fct['id']}</h1>
			{fct['label']}
		</div>
	));
};

//const useStyles = makeStyles()((theme) => ({}));

export default BlocFunction;
