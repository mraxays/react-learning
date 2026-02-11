import axios from "../utils/axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const Context = (props) => {
  const [product, setProduct] = useState( JSON.parse(localStorage.getItem("products")) || null);
  // const getProducts = async () => {
  //   try {
  //     const { data } = await axios("/products");
  //     setProduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getProducts();
  // }, []);
  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
