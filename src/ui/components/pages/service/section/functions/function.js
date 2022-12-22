import React from 'react';

export const Function = ({ fct }) => {
	return (
		<div key={fct.id}>
			<h1>{fct['id']}</h1>
			{fct['label']}
		</div>
	);
};
