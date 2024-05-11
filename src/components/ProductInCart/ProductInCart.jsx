import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import "./ProductInCart.css"
import { productContext } from '../../context/ProductContext';

const ProductInCart = ({ item }) => {

    const { removeToCart } = useContext(productContext)
    const totalPrice = item.product.price * item.quantity;

    return (
        <div className="productInCart">
            <img src={item.product.image} alt={item.product.title} className="productImage" />
            <div className="productDetails">
            <h3>{item.product.title}</h3>
            <p>Precio Unitario: ${item.product.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Total: ${totalPrice}</p>
            </div>
            <button onClick={() => removeToCart(item.product.id)} className="removeButton">
            <FaTimes />
            </button>
        </div>
    );
};

export default ProductInCart;
