import { useContext, useState, useEffect, useMemo } from 'react';
import { makeStyles } from 'tss-react/mui';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { ContentBloc } from './section/contentBloc';
import { useTreeUrlParams } from 'ui/utils/hooks/searchParams';
import { CoreApiContext } from 'ui/coreApi';
import { getFunctionsFilterer } from 'ui/utils/getFilteredFunctions';
import { TreeFilter } from 'ui/components/shared/treeFilter/treeFilter';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import useMediaQuery from '@mui/material/useMediaQuery';

export const ServiceOffer = () => {
  const { classes, theme } = useStyles();
  const trigger = useScrollTrigger({ disableHysteresis: true });
  const matchesMdBreackpoint = useMediaQuery(theme.breakpoints.up('md'));

  const scrollToTop = () => {
    //If user is not at the top and screen larger than "md"
    if (trigger && matchesMdBreackpoint) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const [searchParams, updateParams] = useTreeUrlParams();
  const [functions, setFunctions] = useState([]);
  const [products, setProducts] = useState([]);

  const { selected, filtered } = searchParams;

  const filteredFunctions = useMemo(
    () => getFunctionsFilterer(selected, filtered, functions),
    [selected, filtered, functions]
  );

  const { getFunctions, getProducts } = useContext(CoreApiContext);

  useEffect(() => {
    getProducts().then((r) => setProducts(r));
    getFunctions().then((r) => {
      setFunctions(r);
    });
  }, [getFunctions, getProducts]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Box className={classes.row} justifyContent='center'>
          <Grid container spacing={2}>
            <Grid item md={4} xs={12}>
              <Box className={classes.box}>
                <Card className={classes.card}>
                  <TreeFilter
                    treeState={searchParams}
                    setTreeState={updateParams}
                    tree={products['children'] ?? []}
                    autoComplete={{
                      isEnabled: true,
                      label: 'Produits, GSBPM, Jalons ...',
                    }}
                    onSelect={scrollToTop}
                  />
                </Card>
              </Box>
            </Grid>
            <Grid item md={8} xs={12}>
              <Box className={classes.box}>
                <Card className={classes.card}>
                  <ContentBloc
                    functions={filteredFunctions}
                    products={products['children'] ?? []}
                  />
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

const useStyles = makeStyles()((theme) => {
  return {
    wrapper: {
      background: theme.palette.background.default,
      position: 'relative',
      paddingBottom: theme.spacing(2),
      paddingTop: `${theme.spacing(4)} !important`,
      [theme.breakpoints.down('md')]: {
        paddingTop: `${theme.spacing(4)} !important`,
      },
      [theme.breakpoints.down('sm')]: {
        paddingTop: `${theme.spacing(4)} !important`,
      },
      [theme.breakpoints.down('xs')]: {
        paddingTop: `${theme.spacing(4)} !important`,
      },
    },
    container: {
      width: '100%',
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      marginRight: 'auto',
      marginLeft: 'auto',
      marginBottom: theme.spacing(6),
      [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(9),
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(6),
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(3),
      },
    },
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    box: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    card: {
      boxShadow: theme.shadows[4],
      [theme.breakpoints.up('xs')]: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
      },
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      },
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
      },
      [theme.breakpoints.up('lg')]: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
      },
      maxWidth: 1280,
      width: '100%',
    },
    image: {
      maxWidth: '100%',
      verticalAlign: 'middle',
    },
  };
});
