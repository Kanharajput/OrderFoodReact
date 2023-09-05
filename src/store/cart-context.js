import React from "react";

// this is only used to create context
// all functionality and logic is handled by context provider
// we are only writing it here so that vscode will provide hints or emment
//  to access this variables and functions
const CartContext = React.createContext({
    // here item is not all food items we have in shop
    // this items list contains only those which are selected by user.
    items:[],
    totalPrice:0,
    addItem: () => {},
    removeItem: () => {}
});

export default CartContext;