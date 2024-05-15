import React, {useContext} from "react"
import './ProductCard.css';
import { productContext } from "../../context/ProductContext";
import { userContext } from "../../context/UserContext"
import { Link } from "react-router-dom";

const ProductCard = ({product}) => { 
  const { addToCart } = useContext(productContext)
  const { user } = useContext(userContext) 

  const handleClick = (event) => {
    
    let element = document.getElementsByClassName('products-page-div')[0];
    element.classList.add('slide-down')
  };
  return (
    <article>
        <Link to={"/products/"+product.id} onClick={handleClick}>{product.title}</Link>
        <img src={product.image} alt={product.title}/>
        <p>${product.price}</p>
        {user && <button onClick={()=>addToCart(product, user)}>Add to Cart</button>}
    </article>
  )
};

export default ProductCard
