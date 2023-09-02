import React from 'react';
import style from './Cart.module.css';

function Cart(){
    return (
        <React.Fragment>
            <button className={style.button}>
                <i className="fa-solid fa-cart-shopping"></i>
                <span> Your Cart</span>
                <span className={style.badge}>1</span>
            </button>
        </React.Fragment>
    );
}

export default Cart;