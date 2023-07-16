import groupBy from 'lodash.groupby';
import { FunctionsByProducts } from './content/functionsByProducts';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import Divider from '@mui/material/Divider';

export const ContentBloc = ({ functions, products }) => {
  const { classes, cx, css } = useStyles();

  const getProduct = (products, idProduct) => {
    const product = products.find((p) => p.id === idProduct);
    if (!product) return { iconUrl: '', label: 'NotAvailable', color: 'white' };
    return product;
  };

  return Object.values(groupBy(functions, (fct) => fct.idProduct)).map(
    (groupedFunctions) => {
      const idProduct = groupedFunctions[0].idProduct;
      const {
        iconUrl,
        label: labelProduct,
        color,
      } = getProduct(products, idProduct);
      return (
        <div key={idProduct} className={classes.productFunctions}>
          <div className={classes.title}>
            <div>
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
            </div>
            <Typography className={classes.productTitle} variant='h4'>
              {labelProduct}
            </Typography>
          </div>
          <FunctionsByProducts
            productFunctions={groupedFunctions}
            labelProduct={labelProduct}
            color={color}
          />
        </div>
      );
    }
  );
};

const useStyles = makeStyles()((theme) => ({
  title: {
    display: 'inline-flex',
  },
  titleDivider: {
    width: theme.spacing(6),
    height: theme.spacing(0.5),
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
