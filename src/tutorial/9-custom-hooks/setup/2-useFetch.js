import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const fetchedProducts = await fetch(url);
    const fetchedProductsJSON = await fetchedProducts.json();
    setProducts(fetchedProductsJSON);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { loading, products };
};
