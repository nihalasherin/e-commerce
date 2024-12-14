import React, { createContext, useEffect, useState } from 'react';
import axios from "axios";
export const ContextDatas = createContext();


function Context({ children }) {

    const [Products, setProducts] = useState([]);
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get("https://fakestoreapi.com/products");
          setProducts(response.data);
        } catch (error) {
          console.error("Error fetching products", error);
        }
      };
      fetchProducts();
    }, []);
  
    console.log("Productsaszdxfghjk", Products);

    return <ContextDatas.Provider value={{Products}}>{children}</ContextDatas.Provider>;
}

export default Context;
