import React from "react"
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect (()=> {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json)
    .then((jsonData) => setProducts(jsonData))
  }, [])

  return (
    <div>
        <h1>This is Products</h1>
    </div>
  )
};

export default Products
