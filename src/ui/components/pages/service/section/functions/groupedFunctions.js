import React from 'react';
import { Function } from './function';

export const GroupedFunctions = ({ groupedFunctions }) => {
	return (
		<>
			<h2>{groupedFunctions[0]['idProduct']}</h2>
			{groupedFunctions.map((fct) => (
				<Function fct={fct} />
			))}
		</>
	);
};
