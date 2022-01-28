import React, { useState, useEffect } from "react";
import { useAPI } from "utils/hooks";

const Service = () => {
  const { getProducts } = useAPI();

  const [products, setProducts] = useState({});

  useEffect(() => {
    getProducts().then((r) => setProducts(r));
  }, [getProducts]);

  return <div>Les Produits : {JSON.stringify(products)}</div>;
};

export default Service;
