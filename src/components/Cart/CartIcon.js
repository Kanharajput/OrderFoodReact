import React from 'react';
import style from './CartIcon.module.css';
import CartContext from './../../store/cart-context';
import {useContext, useEffect, useState} from 'react';


function CartIcon(props){

    // get the context
    const cartCtx = useContext(CartContext);
    const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);

    const { items } = cartCtx;
    // find out each item's count order by customer
    // dal bati = 2 , gulab jamun = 2. items.length will return 2 as only two items
    // we want 4 to return as total item's count
    // use reduce builtin method , return after doing calculation over each element
    const noOfCartItems = items.reduce((prevCalc, currentItem) => prevCalc + currentItem.amount , 0)

    const btnClasses = `${style.button} ${isBtnHighlighted ? style.bump : ''}`;

    useEffect(() => {
        if(items.length === 0){
            return;
        }
        setIsBtnHighlighted(true);

        const timer = setTimeout(()=>{
            setIsBtnHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items])

    return (
        <React.Fragment>
            <button className={btnClasses} onClick={props.onClick}>
                <i className="fa-solid fa-cart-shopping"></i>
                <span> Your Cart</span>
                <span className={style.badge}>{noOfCartItems}</span>
            </button>
        </React.Fragment>
    );
}

export default CartIcon;