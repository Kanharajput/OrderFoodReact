import { Fragment } from 'react';
import style from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import {useContext} from 'react';
import CartContext from './../../store/cart-context';


// every input form should have different id 
// to select them correctly
function MealItem(props) {

    const cartCtx = useContext(CartContext);

    const addToOrderList = (itemCount) =>{
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: itemCount
        });
    }

    return (
        <Fragment>
            <div className={style.meal}>
                <h3>{props.name}</h3>
                <p className={style.description}>{props.description}</p>
                <p className={style.price}>₹{props.price}</p>
            </div>
            <MealItemForm id={props.id} addItemToCart={addToOrderList}/>
        </Fragment>
    )
}

export default MealItem;