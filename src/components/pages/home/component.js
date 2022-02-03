import React from "react";
import Metallica from "./headSection";
import Application from "./application";
import InformationSysteme from "./informationSysteme";
import Footer from "components/shared/footer/component";

const Home = () => {
  return (
    <>
      <Metallica />
      <Application />
      <InformationSysteme />
      <Footer />
    </>
  );
};

export default Home;
