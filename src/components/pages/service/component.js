import React, { useState, useEffect } from "react";
import dataFunctions from "utils/mockData/functions";
// import dataProducts from "utils/mockData/products";

// import { useAPI } from "utils/hooks";

const Service = () => {
  const [functions, setFunctions] = useState([]);

  useEffect(() => {
    setFunctions(dataFunctions);
  }, []);

  return <div>Les Services : {JSON.stringify(functions)}</div>;
};

export default Service;
