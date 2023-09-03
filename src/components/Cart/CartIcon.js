import React from 'react';
import style from './CartIcon.module.css';
import CartContext from './../../store/cart-context';
import {useContext} from 'react';


function CartIcon(props){

    // get the context
    const cartCtx = useContext(CartContext);

    // find out each item's count order by customer
    // dal bati = 2 , gulab jamun = 2. items.length will return 2 as only two items
    // we want 4 to return as total item's count
    // use reduce builtin method , return after doing calculation over each element
    const noOfCartItems = cartCtx.items.reduce((prevCalc, currentItem) => prevCalc + currentItem.amount , 0)

    return (
        <React.Fragment>
            <button className={style.button} onClick={props.onClick}>
                <i className="fa-solid fa-cart-shopping"></i>
                <span> Your Cart</span>
                <span className={style.badge}>{noOfCartItems}</span>
            </button>
        </React.Fragment>
    );
}

export default CartIcon;