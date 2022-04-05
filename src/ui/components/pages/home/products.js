import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { applications } from "utils/dictionary/application";
import ApplicationCard from "./productsCard";
import { makeStyles } from "tss-react/mui";
// import MockProducts from "utils/mockData/products";
import { useIsWidthUp } from "utils/hooks";

const useStyles = makeStyles()((theme) => {
  return {
    lgPTop: {
      paddingTop: `${theme.spacing(10)} !important`,
      [theme.breakpoints.down("md")]: {
        paddingTop: `${theme.spacing(9)} !important`,
      },
      [theme.breakpoints.down("sm")]: {
        paddingTop: `${theme.spacing(8)} !important`,
      },
      [theme.breakpoints.down("xs")]: {
        paddingTop: `${theme.spacing(7)} !important`,
      },
    },
    containerFluid: {
      width: "100%",
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      marginRight: "auto",
      marginLeft: "auto",
      maxWidth: 1370,
    },
    LgMgBottom: {
      marginBottom: `${theme.spacing(10)} !important`,
      [theme.breakpoints.down("md")]: {
        marginBottom: `${theme.spacing(9)} !important`,
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: `${theme.spacing(8)} !important`,
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: `${theme.spacing(7)} !important`,
      },
    },
  };
});
const Application = () => {
  const { classes, cx } = useStyles();
  // const [products, setProducts] = useState(MockProducts);
  const isMdUp = useIsWidthUp("md");
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className={cx(classes.containerFluid, classes.lgPTop)}>
        <Typography variant="h3" align="center" className={classes.LgMgBottom}>
          Les différents Produits
        </Typography>
        <div className={classes.containerFluid}>
          <Grid container spacing={4}>
            {applications.map((element) => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={
                  isMdUp ? element.mdDelay : element.smDelay
                }
                key={element.headline}
              >
                <ApplicationCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Application;
