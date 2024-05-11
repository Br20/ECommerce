import { useContext } from "react";
import { productContext } from "../../context/ProductContext";
import { NavLink } from "react-router-dom";
import "./CartSummary.css"
import { FaCartShopping } from "react-icons/fa6";

const CartSummary = () => {
    const { cart } = useContext(productContext)
    return (
        <div className="cartSummaryContainer">
            <NavLink to="/cart" color="red">
                <FaCartShopping fontSize={30}/>
            </NavLink>
            ${cart.reduce((accum,curr)=> accum + (curr.product.price*curr.quantity),0).toFixed(2)}
        </div>
    )
};

export default CartSummary
