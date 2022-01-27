import React from "react";
import Metallica from "./metallica";
import Application from "./application";
import { makeStyles } from "tss-react/mui";
import InformationSysteme from "./informationSysteme";

const useStyles = makeStyles()((theme) => {
  return {
    wrapper: {
      backgroundColor: theme.palette.common.white,
      overflowX: "hidden",
    },
  };
});
const Home = () => {
  const { classes } = useStyles();

  return (
    <>
      <Metallica />
      <Application />
      <InformationSysteme />
    </>
  );
};

export default Home;
