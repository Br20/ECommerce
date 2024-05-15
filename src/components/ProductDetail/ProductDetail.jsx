import React, { useContext } from 'react';
import { useParams } from "react-router-dom"
import './ProductDetail.css'; // Estilos CSS
import { productContext } from '../../context/ProductContext.jsx';


const ProductDetail = () => {
  const { products } = useContext(productContext)
  const { productId } = useParams();
  const prod = products.filter(prod => prod.id == Number(productId))[0];
  return (
    <div className="product-detail">
      <img className="product-image" src={prod.image} alt={prod.title} />
      <div className="product-info">
        <h2 className="product-title">{prod.title}</h2>
        <p className="product-category">Category: {prod.category}</p>
        <p className="product-description">{prod.description}</p>
        <p className="product-price">Price: ${prod.price}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
