import Typography from '@mui/material/Typography';
import ReactMarkdown from 'react-markdown';
import { Fragment } from 'react';
export const TypographyWithMarkdown = (props) => {
  const { children, ...rest } = props;
  return (
    <Typography {...rest}>
      <ReactMarkdown components={{ p: Fragment }}>{children}</ReactMarkdown>
    </Typography>
  );
};
