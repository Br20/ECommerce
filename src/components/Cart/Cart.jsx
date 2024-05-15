import { useContext, useEffect } from "react";
import { productContext } from "../../context/ProductContext"
import ProductInCart from "../ProductInCart/ProductInCart";
import './Cart.css'
import { NavLink } from "react-router-dom";

const Cart = () => {
    const { cart } = useContext(productContext)
    if (cart)
        return (<div className="cartContainer">
                    <h3 className="EmptyCart">Cart is Empty</h3>
                    <p className="EmptyCart-msg">Please, <NavLink to="/login">Log in</NavLink> to add products</p>
                </div>)
    return (
        <div className="cartContainer">
                { cart.toSorted((a,b) => a.product.title > b.product.title).map( (prod) => (<ProductInCart key={prod.product.id} item={prod}/>)) }
                <p>Total price: <span>${cart.reduce((accum, curr) => accum + (curr.product.price * curr.quantity), 0).toFixed(2)}</span></p>  
        </div>
    )
};

export default Cart
