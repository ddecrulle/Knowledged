import React from 'react';
import { Content } from './content';

export const FunctionsByGSBPM = ({ productFunctions }) => {
	return (
		<>
			{productFunctions.map((fct) => (
				<Content content={fct} key={fct.id} />
			))}
		</>
	);
};
