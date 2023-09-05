import CartContext from './cart-context';
import { useReducer } from 'react';

// default or initial state
const initialStateValues = {
    items:[], 
    totalPrice: 0,
};

// update the states
const updateCart = (state, action) => {
    if(action.type == "ADD"){
        const updatedItems = state.items.concat(action.item);
        // amount specify the item's count which is the part of item
        const updatedPrice = state.totalPrice + (action.item.price * action.item.amount);
        return ({items: updatedItems,totalPrice: updatedPrice});
    }

    return initialStateValues;
}   



const CartProvider = (props) => {

    const [currentCart, dispatchCart] = useReducer(updateCart, initialStateValues);
    
    const addItemToCartHandler = (item) => {
        dispatchCart({type:"ADD", item: item})
    }  
    
    const removeItemFromCartHandler = () => {
        

    }

    // it's dummy right now
    // it will be stateful later on
    const cartContext = {
        items: currentCart.items,
        totalPrice: currentCart.totalPrice,
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