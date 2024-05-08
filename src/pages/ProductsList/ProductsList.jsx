import React, { useContext } from "react";
import { productContext } from "../../context/ProductContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import './ProductsList.css'
import NavBar from "../../components/NavBar/NavBar";
import { BarLoader } from "react-spinners";

const ProductsList = ({filter}) => {
  const { products, isLoading, error } = useContext(productContext)
  let productsToRender = products
  if (isLoading) 
    return (
      <div>
        <NavBar/>
        <h1>Listado de productos</h1>
        <BarLoader color="#36d7b7" />
      </div>
    )
  return (
    <div>
      <NavBar/>
      <h1>Listado de productos</h1>      
      <section className="products-container">
          {productsToRender && productsToRender.map((prod) => <ProductCard key={prod.id} product={prod}/> )}
      </section>
    </div>
  )
};

export default ProductsList
