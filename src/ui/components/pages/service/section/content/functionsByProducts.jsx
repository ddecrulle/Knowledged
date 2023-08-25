import React from 'react';
import { Content } from './content';
import groupBy from 'lodash.groupby';
import { TypographyWithMarkdown } from 'ui/components/shared/typographyWithMarkdown';

export const FunctionsByProducts = ({ productFunctions, color }) => {
  return (
    <>
      {Object.values(groupBy(productFunctions, (fct) => fct.gsbpm.id)).map(
        (gsbpmGroupedFct) => {
          const { id, label } = gsbpmGroupedFct[0]['gsbpm'];
          return (
            <React.Fragment key={id}>
              <TypographyWithMarkdown
                variant='subtitle1'
                textTransform='uppercase'
                color='grey'
              >
                {label}
              </TypographyWithMarkdown>
              <ul>
                {gsbpmGroupedFct.map((fct) => (
                  <Content content={fct} key={fct.id} color={color} />
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
