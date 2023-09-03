import CartContext from './cart-context';

const CartProvider = (props) => {

    const addItemToCartHandler = () => {
        
    }
    
    const removeItemFromCartHandler = () => {

    }

    // it's dummy right now
    // it will be stateful later on
    const cartContext = {
        items:[],
        totalAmount:0,
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