import React, {useContext} from "react"
import './ProductCard.css';
import { productContext } from "../../context/ProductContext";

const ProductCard = ({product}) => { 
  const { addToCart } = useContext(productContext)
  return (
    <article>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title}/>
        <p>${product.price}</p>
        <button onClick={()=>addToCart(product)}>Add to Cart</button>
    </article>
  )
};

export default ProductCard
