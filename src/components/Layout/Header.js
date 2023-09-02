import React from 'react';
import dal_bati from './Img/dalbtichurma.jpg';
import style from './Header.module.css';
import Cart from './../Cart/Cart';

function Header(){
    return (
        <React.Fragment>
            <div className={style.header}>
                <h3>Kanha Meals</h3>
                <Cart />
            </div>  
            <div className={style['main-image']}>
                <img src={dal_bati} />
            </div>
        </React.Fragment>
    );
}

export default Header;