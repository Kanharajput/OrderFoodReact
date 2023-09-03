import CartContext from './cart-context';
import { useReducer } from 'react';

// default or initial state
const defaultState = {
    items:[], 
    totalAmount:0
};

// update the states
const updateCart = (state, action) => {
    if(action.type == "ADD"){
        const updatedItems = state.items.concat(action.item);
        const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
        return ({items: updatedItems,totalAmount: updatedAmount});
    }

    return defaultState;
}



const CartProvider = (props) => {

    const [currentCart, dispatchCart] = useReducer(updateCart, defaultState);
    
    const addItemToCartHandler = (item) => {
        dispatchCart({type:"ADD", item: item})
    }  
    
    const removeItemFromCartHandler = () => {

    }

    // it's dummy right now
    // it will be stateful later on
    const cartContext = {
        items: currentCart.items,
        totalAmount: currentCart.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;