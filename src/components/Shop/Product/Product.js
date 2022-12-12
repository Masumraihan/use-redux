import React from 'react';
import { addToCart } from './../../../redux/actions/cartActions';

const Product = (props) => {
    const {addToCart,product} = props;
    return (
        <div style={{border: '1px solid gray', margin: '20px', padding: '20px'}}>
            <h2>Name: {product.name}</h2>
            <button onClick={() => addToCart(product.id)}>add to cart</button>
        </div>
    );
};

export default Product;