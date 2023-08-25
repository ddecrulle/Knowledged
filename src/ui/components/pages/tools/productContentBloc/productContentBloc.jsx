import { makeStyles } from 'tss-react/mui';
import Divider from '@mui/material/Divider';
import { ProductTools } from './productTools';
import CircularProgress from '@mui/material/CircularProgress';
import { TypographyWithMarkdown } from 'ui/components/shared/typographyWithMarkdown';
import { Typography } from '@mui/material';

export const ProductContentBloc = ({ products }) => {
  const { classes, cx, css } = useStyles();

  if (products.length === 0) return <CircularProgress />;

  return products.map((product) => {
    const { id, iconUrl, label: labelProduct, color, description } = product;
    return (
      <div key={id} id={id} className={classes.productFunctions}>
        <div className={classes.title}>
          <img src={iconUrl} alt='' height='50px' width='50px' />
          <div className={classes.productTitle}>
            <Typography variant='h4'>
              {labelProduct}
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
            </Typography>
            <TypographyWithMarkdown
              textTransform='none'
              variant='body1'
              color='gray'
            >
              {description}
            </TypographyWithMarkdown>
          </div>
        </div>
        <ProductTools product={product} color={color} />
      </div>
    );
  });
};

const useStyles = makeStyles()((theme) => ({
  title: {
    display: 'inline-flex',
  },
  titleDivider: {
    width: '50px',
    height: theme.spacing(0.5),
    borderWidth: '3px',
    borderRadius: '10px',
    marginBottom: theme.spacing(1),
  },
  productTitle: {
    fontWeight: 500,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(6),
    marginLeft: theme.spacing(4),
  },
  productFunctions: { marginBottom: theme.spacing(6) },
}));
