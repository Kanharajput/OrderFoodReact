import CartContext from './cart-context';
import { useReducer } from 'react';

// default or initial state
const initialStateValues = {
    items:[], 
    totalPrice: 0,
};

// update the states
const updateCart = (state, action) => {
    
    if(action.type === "ADD"){
        
        let updatedItems;

        // amount specify the item's count which is the part of item
        const updatedPrice = state.totalPrice + (action.item.price * action.item.amount);

        // return index if the item exits in items list
        const existingCartItemId = state.items.findIndex(item => item.id === action.item.id)
        
        // if item not exist contains -1
        if(existingCartItemId !== -1){
            const existingCartItem = state.items[existingCartItemId];
            const updatedItem = {...existingCartItem, amount:existingCartItem.amount + action.item.amount};
            updatedItems = [...state.items];
            updatedItems[existingCartItemId] = updatedItem;
        }
        
        else{
            updatedItems = state.items.concat(action.item);
        }
        
        return ({items: updatedItems,totalPrice: updatedPrice});
    }
    

    else if(action.type === "REMOVE"){
        const RemovingItemIndex = state.items.findIndex(item => item.id === action.id);
        const ItemToBeRemoved = state.items[RemovingItemIndex];
        const ItemAmount = ItemToBeRemoved.amount;
        // decrease the total price by user removed item
        const updatedPrice = state.totalPrice - ItemToBeRemoved.price;
        let updatedItems;
        let updatedItem;

        // if amount is greater than one then minus amount by 1 
        if(ItemAmount > 1){
            // initialise the updatedItem with the old value
            updatedItem = {...ItemToBeRemoved};
            // decrease the amount by 1
            updatedItem.amount = ItemAmount - 1;
            updatedItems = [...state.items];
            updatedItems[RemovingItemIndex] = updatedItem;
        }
        
        // only single instance item in the list then remove it from the items
        else{
            // create new array by excluding the item which has the id equal to action id
            updatedItems = state.items.filter(item => item.id != action.id);
        }

        return ({items: updatedItems, totalPrice: updatedPrice});
    }

    return initialStateValues;
}   



const CartProvider = (props) => {

    const [currentCart, dispatchCart] = useReducer(updateCart, initialStateValues);
    
    const addItemToCartHandler = (item) => {
        dispatchCart({type:"ADD", item: item});
    }  
    
    const removeItemFromCartHandler = (id) => {
        dispatchCart({type:"REMOVE", id: id});
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