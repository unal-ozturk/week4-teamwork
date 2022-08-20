import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ProductContext from "../context/ProductContext";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const context = useContext(ProductContext);
   
  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    console.log(res);
    setData(res.data);
    setLoading(false);
  };

  const BasketToProduct = ({Item}) =>{
    context.setBasketProduct([
        ...context.BasketProduct,
        Item
    ])
    console.log(context.BasketProduct);
  };


  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <ul className="Products">
          {data.map(item => (
            <li className="ProductItem" key={item.id}>
              <img src={item.image} alt={item.title} style={{width: '200px'}}/>
              <h3>{item.title}</h3>
              <button><img src="https://img.icons8.com/windows/32/000000/shopping-basket-2.png" onClick={() => BasketToProduct(item)}/></button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ProductList;
