import { useContext } from "react";
import { productContext } from "../../context/ProductContext"
import ProductInCart from "../ProductInCart/ProductInCart";

const Cart = () => {
    const { cart } = useContext(productContext)
    return (
        <div className="cartContainer">
                { cart.toSorted((a,b) => a.product.title > b.product.title).map( (prod) => (<ProductInCart item={prod}/>)) }
                <p>Total price: <span>${cart.reduce((accum, curr) => accum + (curr.product.price * curr.quantity), 0).toFixed(2)}</span></p>  
        </div>
    )
};

export default Cart
