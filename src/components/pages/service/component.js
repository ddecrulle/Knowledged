import React from "react";
import { makeStyles } from "tss-react/mui";
import Footer from "components/shared/footer/component";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import atelierConception from "img/atelierConception.png";
import BlocFilter from "./BlocFilter";

const useStyles = makeStyles()((theme) => {
  return {
    wrapper: {
      background: theme.palette.grey["100"],
      position: "relative",
      paddingBottom: theme.spacing(2),
      paddingTop: `${theme.spacing(4)} !important`,
      [theme.breakpoints.down("md")]: {
        paddingTop: `${theme.spacing(4)} !important`,
      },
      [theme.breakpoints.down("sm")]: {
        paddingTop: `${theme.spacing(4)} !important`,
      },
      [theme.breakpoints.down("xs")]: {
        paddingTop: `${theme.spacing(4)} !important`,
      },
    },
    container: {
      width: "100%",
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      marginRight: "auto",
      marginLeft: "auto",
      minWidth: 500,
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(9),
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(6),
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(3),
      },
    },
    row: {
      display: "flex",
      flexWrap: "wrap",
    },
    card: {
      boxShadow: theme.shadows[4],
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      [theme.breakpoints.up("xs")]: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
      },
      [theme.breakpoints.up("sm")]: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      },
      [theme.breakpoints.up("md")]: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
      },
      [theme.breakpoints.up("lg")]: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
      },
      maxWidth: 1280,
      width: "100%",
    },
    image: {
      maxWidth: "100%",
      verticalAlign: "middle",
    },
  };
});

const OffreDeService = () => {
  const { classes, theme } = useStyles();

  // const [functions, setFunctions] = useState([]);

  // useEffect(() => {
  //   setFunctions(dataFunctions);
  // }, []);

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <Box className={classes.row} display="flex" justifyContent="center">
            <Grid container spacing={2}>
              <Grid item md={4} xs={12}>
                <BlocFilter />
              </Grid>
              <Grid item md={8} xs={12}>
                <Box display="flex" flexDirection="column" height="100%">
                  <Card className={classes.card}>
                    <img
                      alt={"Exemple pdf"}
                      src={atelierConception}
                      className={classes.image}
                    />
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
      <Footer upperColor={theme.palette.grey["100"]} />
    </>
  );
};

export default OffreDeService;
