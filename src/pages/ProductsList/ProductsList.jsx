import React, { useContext } from "react";
import { productContext } from "../../context/ProductContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import './ProductsList.css'
import { BarLoader } from "react-spinners";
import Search from "../../components/Search/Search";
import CartSummary from "../../components/CartSummary/CartSummary";
import Sort from "../../components/Sort/Sort";

const ProductsList = ({filter}) => {
  const { products, isLoading, error, query} = useContext(productContext)
  let productsToRender = products
  if (isLoading) 
    return (
      <div>
        <BarLoader color="#36d7b7" />
      </div>
    )
  return (
    <div>  
      <Search />
      <Sort />
      <CartSummary />
      <section className="products-container">
          {productsToRender && productsToRender.filter((prod) => prod.title.toLowerCase().includes(query.toLowerCase()))
          .map((prod) => <ProductCard key={prod.id} product={prod}/> )}
      </section>
    </div>
  )
};

export default ProductsList
