import React, { useContext } from "react"
import NavBar from "../../components/NavBar/NavBar"
import { productContext } from "../../context/ProductContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import '../ProductsList/ProductsList.css'
import { BarLoader } from "react-spinners";

const Home = () => {
  const { products, isLoading, error } = useContext(productContext)
  let productsToRender = products.slice(0, 4);
  if (isLoading) 
    return (
      <div>
        <NavBar/>
        <h1>Productos Destacados</h1>
        <BarLoader color="#36d7b7" />
      </div>
    )
  return (
    <div>
      <NavBar/>
      <h1>Productos Destacados</h1>
      <section className="products-container">
          {productsToRender && productsToRender.map((prod) => <ProductCard key={prod.id} product={prod}/> )}
      </section>
    </div>
  )
};

export default Home
