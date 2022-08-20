import React, { useState, createContext } from "react";

const ProductContext = createContext(); // general state

export const ShoppingProvider = ({ children }) => {
    const [BasketProduct, setBasketProduct] = useState([]);
  
    const value = {
        BasketProduct,
        setBasketProduct
    };
  
    return (
      <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    );
  };
  export default ProductContext;