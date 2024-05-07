import React from "react"
import './ProductCard.css';

const ProductCard = ({product}) => {
  return (
    <article>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title}/>
        <p>{product.price}</p>
        <button>Add to Cart</button>
    </article>
  )
};

export default ProductCard
