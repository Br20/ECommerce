import { useContext, useEffect } from "react";
import { productContext } from "../../context/ProductContext";
import { NavLink } from "react-router-dom";
import "./CartSummary.css"
import { FaCartShopping } from "react-icons/fa6";

const CartSummary = () => {
    const { cart } = useContext(productContext)
    useEffect(()=>{
        console.log("se actualizo carrito")
    },[cart])
    return (
        <div className="cartSummaryContainer">
            <NavLink to="/cart">
                <FaCartShopping fontSize={30} color="#702d21"/>
            </NavLink>
            ${cart.reduce((accum,curr)=> accum + (curr.product.price*curr.quantity),0).toFixed(2)}
        </div>
    )
};

export default CartSummary
