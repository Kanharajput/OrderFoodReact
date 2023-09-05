import { Fragment } from "react";
import style from './CartItem.module.css';


const CartItem = (props) =>{
    return (
        <Fragment>
            <div className={style['cart-item']}>
                <div>
                    <h2>{props.name}</h2>
                    <div className={style.summary}>
                        <span className={style.price}>₹{props.price}</span>
                        <span className={style.amount}>x {props.amount}</span>
                    </div>
                </div>
                <div className={style.actions}>
                    <button onClick={props.onRemove}>−</button>
                    <button onClick={props.onAdd}>+</button>
                </div>
            </div>
        </Fragment>
    );
}

export default CartItem;