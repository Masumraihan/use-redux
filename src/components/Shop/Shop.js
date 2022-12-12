import React from 'react';
import Cart from './Cart/Cart';
import Product from './Product/Product';
import { addToCart } from './../../redux/actions/cartActions';
import { connect } from 'react-redux';

const Shop = (props) => {
    console.log(props)
    const {products,addToCart} = props;
    return (
        <div>
            <Cart></Cart>
            <h1>This is shop</h1>
            {
                products.map(product => <Product 
                    key = {product.id}
                    product = {product}
                    addToCart = {addToCart}
                    ></Product>)
            }
        </div>
    );
};

const mapStateToProps = state =>{
    return{
        products: state.products
    }
}
const mapDispatchToProps = {
    addToCart:addToCart
}
//const connectToStore = connect(mapStateToProps,mapDispatchToProps);
export default connect(mapStateToProps,mapDispatchToProps)(Shop);