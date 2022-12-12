import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
    products: [
        { name: 'lenovo',id: 1},
        { name: 'asus',id: 2},
        { name: 'hp',id: 3},
        { name: 'dell',id:4},
        { name: 'walton',id: 5}
    ]
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newId = action.id;
            const newCart = [...state.cart,newId];
            return {...state, cart: newCart}
        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item !== id);
            return {...state, cart: remainingCart};
        default:
            return state;
    }
}
export default cartReducers;