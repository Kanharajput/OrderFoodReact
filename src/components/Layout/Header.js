import React from 'react';
import dal_bati from './Img/dalbtichurma.jpg';
import style from './Header.module.css';
import CartIcon from './../Cart/CartIcon';
import Cart from './../Cart/Cart'
import {useState} from 'react';

function Header(){
    
    // if showCart true = display Cart
    // if ShowCart false = display CartIcon
    const [showCart, setShowCart] = useState(false);
    
    // hide the CartIcon and display the Cart
    const displayCart = () => {
        setShowCart(true);
    }

    const displayCartIcon = () => {
        setShowCart(false);
    }

    const orderFood = (foodItems) => {
        setShowCart(false);
        console.log(foodItems);
    }

    return (
        <React.Fragment>
            { !showCart && <div className={style.header}>
                <h3>Kanha Meals</h3>
                <CartIcon onClick={displayCart}/>
            </div> }

            { showCart && <Cart onClose={displayCartIcon} onOrder={orderFood}/>}

            <div className={style['main-image']}>
                <img src={dal_bati} />
            </div>
        </React.Fragment>
    );
}

export default Header;