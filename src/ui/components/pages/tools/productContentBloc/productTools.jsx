import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';

export const ProductTools = ({ product, color }) => {
  const { classes } = useStyles({ color });
  return (
    <ul className={classes.ul}>
      {product.children.map((tools) => (
        <li key={tools.id} className={classes.li}>
          <Typography variant='inherit' color='GrayText'>
            {tools.label}
          </Typography>
          <Typography variant='body2' color='black'>
            {tools.description}
          </Typography>
        </li>
      ))}
    </ul>
  );
};

const useStyles = makeStyles()((theme, { color }) => ({
  ul: {
    listStyleType: 'disclosure-closed',
    color: color,
  },
  li: {
    marginBottom: theme.spacing(2),
  },
}));
