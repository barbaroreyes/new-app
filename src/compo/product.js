import React from 'react';

const Product = (props) => {
  return (
    <div className="product-card">
        <div className="product-name">
        <p>{props.author}</p> 
        </div>
        <div className="product-image">
        <img className="product-img" src={props.image} alt={props.author} />
        </div>
      
      
    </div>
  );
}

export default Product;
