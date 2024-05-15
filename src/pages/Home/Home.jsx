import React, { useContext } from "react"
import { productContext } from "../../context/ProductContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import './Home.css'
import { SyncLoader } from "react-spinners";

const Home = () => {
  const { products, isLoading, error } = useContext(productContext)
  let productsToRender = products.toSorted((a,b) => b.rating.rate - a.rating.rate).slice(0, 4);
  if (isLoading) 
    return (
      <div className="home-container">
        <SyncLoader color="#702d21" size={30}/>
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
