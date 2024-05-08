import React, { useContext } from "react";
import { productContext } from "../../context/ProductContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import './ProductsList.css'
import { BarLoader } from "react-spinners";

const ProductsList = ({filter}) => {
  const { products, isLoading, error } = useContext(productContext)
  let productsToRender = products
  if (isLoading) 
    return (
      <div>
        <h2>Listado de productos</h2>
        <BarLoader color="#36d7b7" />
      </div>
    )
  return (
    <div>
      <h2>Listado de productos</h2>      
      <section className="products-container">
          {productsToRender && productsToRender.map((prod) => <ProductCard key={prod.id} product={prod}/> )}
      </section>
    </div>
  )
};

export default ProductsList
