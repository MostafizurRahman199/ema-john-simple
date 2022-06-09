import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ( {product,handleAddToCart} ) => {
   
    // const {product,handleAddToCart} = props;
    const {name,seller,price,ratings,img} = product;
    return (
        <div className='product'>
          <img src={img} alt="" />
         <div className="product-info">
         <p className='product-name'>{name}</p>
          <p><small>Seller : {seller}</small>
          <br /><small>Ratings : {ratings}</small>
          <br /><small>Price : {price}</small></p>
          
         </div>
         <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
             <p>Add to Cart</p>
             <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
         </button>
        
        </div>
    );
};

export default Product;