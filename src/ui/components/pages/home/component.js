import React from "react";
import Metallica from "./headSection";
import Application from "./products";
import InformationSysteme from "./informationSystem";
import Footer from "ui/components/shared/footer/component";

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
