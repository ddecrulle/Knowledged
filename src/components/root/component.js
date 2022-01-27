import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos/dist/aos";
import "aos/dist/aos.css";
import Home from "components/pages/home";
import Service from "components/pages/service";
import Footer from "components/shared/footer";
import TopBar from "components/shared/topbar";

AOS.init({ once: true });

const Root = () => (
  <Router>
    <TopBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="services" element={<Service />} />
    </Routes>
    <Footer />
  </Router>
);

export default Root;
