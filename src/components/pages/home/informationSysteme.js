import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";
import Box from "@mui/system/Box";
import si from "img/siMetallica.png";

const useStyles = makeStyles()((theme) => {
  return {
    lgPTop: {
      backgroundColor: "#FFFFFF",
      paddingTop: `${theme.spacing(20)} !important`,
      [theme.breakpoints.down("md")]: {
        paddingTop: `${theme.spacing(18)} !important`,
      },
      [theme.breakpoints.down("sm")]: {
        paddingTop: `${theme.spacing(16)} !important`,
      },
      [theme.breakpoints.down("xs")]: {
        paddingTop: `${theme.spacing(14)} !important`,
      },
    },
    title: {
      marginBottom: `${theme.spacing(5)} !important`,
      [theme.breakpoints.down("md")]: {
        marginBottom: `${theme.spacing(5)} !important`,
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: `${theme.spacing(4)} !important`,
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: `${theme.spacing(3)} !important`,
      },
    },
    container: {
      width: "100%",
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      marginRight: "auto",
      marginLeft: "auto",
      maxWidth: 1370,
      [theme.breakpoints.down("md")]: {
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
      },
      [theme.breakpoints.down("sm")]: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
      },
      [theme.breakpoints.down("xs")]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      },
      overflow: "hidden",
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
    box: {
      display: "flex",
      justifyContent: "center",
    },
    image: {
      maxWidth: "100%",
      verticalAlign: "middle",
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[4],
    },
  };
});

const InformationSysteme = () => {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.lgPTop} >
        <Typography variant="h3" align="center" className={classes.title}>
          Le Système d'information
        </Typography>
        <div className={classes.container}>
          <Box className={classes.box}>
            <div className={"container"} >
              <img
                data-aos="zoom-in"
                alt={"Le système d'information"}
                src={si}
                className={classes.image}
              />
            </div>
          </Box>
        </div>
      </div>
    </>
  );
};

export default InformationSysteme;
