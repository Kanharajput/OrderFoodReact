import React from 'react';
import dal_bati from './Img/dalbtichurma.jpg';
import style from './Header.module.css';

function Header(){
    return (
        <React.Fragment>
            <div className={style.header}>
                <h3>Kanha Meals</h3>
                <button>Cart</button>
            </div>  
            <div className={style['main-image']}>
                <img src={dal_bati} />
            </div>
        </React.Fragment>
    );
}

export default Header;