import style from './Cart.module.css';
import Modal from './../Layout/Modal';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';
import CartItem from './CartItem';


function Cart(props) {

    const cartCtx = useContext(CartContext);

    const hasItems = cartCtx.items.length > 0;         // if no item added to cart then remove order button
    const totalPrice = cartCtx.totalPrice;             

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount:1})
    }

    const cartItemRemoveHandler = (id) => { 
        cartCtx.removeItem(id);
    }

    const cartItemList = <ul className={style['cart-items']}> {
        cartCtx.items.map((item) => <li>
                <CartItem 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    onAdd={cartItemAddHandler.bind(null,item)} 
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}/>
                </li>)
            }</ul>
            
    // const orderIt = () => {
    //     // right now just sending dummy data
    //     props.onOrder({ name: "Gulab Jamun", count: 5, price: "₹200" });
    // }

    return (
        <Modal onClick={props.onClose}>
            {cartItemList}
            <div className={style.total}>
                <span>Total Price</span>
                <span>₹{totalPrice}</span>
            </div>
            <div className={style.actions}>
                <button className={style['button--alt']} onClick={props.onClose}> Close</button>
                {hasItems && <button className={style.button} onClick={props.onOrder}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;