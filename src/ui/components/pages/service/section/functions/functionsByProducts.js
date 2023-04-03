import React from 'react';
import { Function } from './function';
import groupBy from 'lodash.groupby';
import Typography from '@mui/material/Typography';

export const FunctionsByProducts = ({ productFunctions, color }) => {
	return (
		<>
			{Object.values(groupBy(productFunctions, (fct) => fct.gsbpm.id)).map(
				(gsbpmGroupedFct) => {
					const { id, label } = gsbpmGroupedFct[0]['gsbpm'];
					return (
						<React.Fragment key={id}>
							<Typography
								variant='subtitle1'
								textTransform='uppercase'
								color='grey'
							>
								{label}
							</Typography>
							<ul>
								{gsbpmGroupedFct.map((fct) => (
									<Function fct={fct} key={fct.id} color={color} />
								))}
							</ul>
						</React.Fragment>
					);
				}
			)}
		</>
	);
};

//const useStyles = makeStyles()((theme) => ({}));
