import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import Divider from '@mui/material/Divider';
import { ProductTools } from './productTools';

export const ProductContentBloc = ({ products }) => {
  const { classes, cx, css } = useStyles();

  if (products.length === 0) return <div>Loading</div>;

  return products.map((product) => {
    const { id, iconUrl, label: labelProduct, color, description } = product;
    return (
      <div key={id} className={classes.productFunctions}>
        <img src={iconUrl} alt='' height='50px' width='50px' />
        <Divider
          component='div'
          orientation='vertical'
          className={cx(
            css({
              backgroundColor: color,
            }),
            classes.titleDivider
          )}
        />
        <Typography className={classes.productTitle} variant='h4'>
          {labelProduct}
          <Typography textTransform='none' variant='body1' color='gray'>
            {description}
          </Typography>
        </Typography>
        <ProductTools product={product} color={color} />
      </div>
    );
  });
};

const useStyles = makeStyles()((theme) => ({
  titleDivider: {
    width: theme.spacing(6),
    borderWidth: '3px',
    borderRadius: '10px',
  },
  productTitle: {
    fontWeight: 500,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(6),
    marginLeft: theme.spacing(4),
  },
  productFunctions: { marginBottom: theme.spacing(6) },
}));
