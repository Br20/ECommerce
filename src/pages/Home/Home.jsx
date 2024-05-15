import React, { useContext } from "react"
import { productContext } from "../../context/ProductContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import './Home.css'
import { BarLoader } from "react-spinners";

const Home = () => {
  const { products, isLoading, error } = useContext(productContext)
  let productsToRender = products.slice(0, 4);
  if (isLoading) 
    return (
      <div>
        <h1>Productos Destacados</h1>
        <BarLoader color="#36d7b7" />
      </div>
    )
  return (
    <div className="home-container">
      <h2>Productos Destacados</h2>
      <p>Estos son los productos con mayor valoración de la última semana...</p>
      <section className="home-products-container">
          {productsToRender && productsToRender.map((prod) => <ProductCard key={prod.id} product={prod}/> )}
      </section>
    </div>
  )
};

export default Home
