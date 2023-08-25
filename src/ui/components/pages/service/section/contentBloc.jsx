import groupBy from 'lodash.groupby';
import { FunctionsByProducts } from './content/functionsByProducts';
import { makeStyles } from 'tss-react/mui';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';

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
            <img src={iconUrl} alt='' height='50px' width='50px' />
            <div className={classes.productTitle}>
              <Typography variant='h4'>{labelProduct}</Typography>
              <Divider
                component='div'
                orientation='vertical'
                className={cx(
                  css({
                    borderColor: color,
                  }),
                  classes.titleDivider
                )}
              />
            </div>
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
    display: 'flex',
  },
  titleDivider: {
    width: '50px',
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
