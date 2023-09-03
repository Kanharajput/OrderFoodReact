import style from './Cart.module.css';
import Modal from './../Layout/Modal';

function Cart(){

    // dummy item
    // created a list in jsx
    // start by creating a list then apply map over it 
    // then return li from map then cover all inside ul
    const item_name = <ul className={style['cart-items']}> {
        [{ id: "1", name: "Dal Bati", amount: "₹120", count:2 }].map((item)=>
            (<li>{item.name}</li>)
        )}</ul>

    return (
        <Modal>
            {item_name}
            <div className={style.total}>
                <span>Total</span>
                <span>₹120</span>
            </div>
            <div className={style.actions}>
                <button className={style['button--alt']}>Close</button>
                <button className={style.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;