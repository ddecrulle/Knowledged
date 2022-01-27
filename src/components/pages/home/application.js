import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { application } from "dictionary/application";
import ApplicationCard from "./applicationCard";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    lgPTop: {
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
    containerFluid: {
      width: "100%",
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      marginRight: "auto",
      marginLeft: "auto",
      maxWidth: 1370,
    },
    LgMgBottom: {
      marginBottom: `${theme.spacing(20)} !important`,
      [theme.breakpoints.down("md")]: {
        marginBottom: `${theme.spacing(18)} !important`,
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: `${theme.spacing(16)} !important`,
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: `${theme.spacing(14)} !important`,
      },
    },
  };
});
const Application = () => {
  const { classes, cx } = useStyles();
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className={cx(classes.containerFluid, classes.lgPTop)}>
        <Typography variant="h3" align="center" className={classes.LgMgBottom}>
          Les différentes Applications
        </Typography>
        <div className={classes.containerFluid}>
          <Grid container spacing={4}>
            {application.map((element) => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={element.mdDelay}
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
