import React from 'react';
import style from './CartIcon.module.css';

function CartIcon(props){
    return (
        <React.Fragment>
            <button className={style.button} onClick={props.onClick}>
                <i className="fa-solid fa-cart-shopping"></i>
                <span> Your Cart</span>
                <span className={style.badge}>1</span>
            </button>
        </React.Fragment>
    );
}

export default CartIcon;