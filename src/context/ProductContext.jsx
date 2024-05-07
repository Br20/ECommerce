import React ,{ useEffect, useState, createContext} from "react";
import { intialProduct } from "../services/intialProduct"
const ProductContext = createContext([intialProduct]);
export default ProductContext;

export const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState([])
    useEffect (()=> {
      fetch("https://fakestoreapi.com/products")
      .then((res) => res.json)
      .then((jsonData) => setProducts(jsonData))
    }, [])
}