import React, { useContext } from "react";
import { productContext } from "../../context/ProductContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import './ProductsList.css'

const ProductsList = () => {
  const { products, isLoading, error } = useContext(productContext) 
  return (
    <section className="products-container">
        {products.map((prod) => <ProductCard key={prod.id} product={prod}/> )}
    </section>
  )
};

export default ProductsList
