import React, { useContext } from "react";
import { productContext } from "../../context/ProductContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import './ProductsList.css'
import { SyncLoader } from "react-spinners";
import Search from "../../components/Search/Search";
import CartSummary from "../../components/CartSummary/CartSummary";
import Sort from "../../components/Sort/Sort";
import { Outlet } from "react-router-dom";

const ProductsList = ({filter}) => {
  const { products, isLoading, error, query} = useContext(productContext)
  let productsToRender = products
  if (isLoading) 
    return (
      <div className="products-page-div" >
        <SyncLoader color="#702d21" size={30}/>
      </div>
    )
  return (
    <>
      <Outlet/>
      <div className="product-selected"></div>
      <div className="products-page-div deslizador">
        <section className="section-filter-cart">
          <div className="filters-div">
            <Search />
            <Sort />
          </div>
          <CartSummary />
        </section>
        
        <section className="products-container">
            {productsToRender && productsToRender.filter((prod) => prod.title.toLowerCase().includes(query.toLowerCase()))
            .map((prod) => <ProductCard key={prod.id} product={prod}/> )}
        </section>
      </div>
    </>
  )
};

export default ProductsList
