import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "components/pages/home";
import Service from "components/pages/service";

import TopBar from "components/topbar";

const Root = () => (
  <Router>
    <TopBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="offre-de-service" element={<Service />} />
    </Routes>
  </Router>
);

export default Root;
