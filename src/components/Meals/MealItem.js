import { Fragment } from 'react';
import style from './MealItem.module.css';
import MealItemForm from './MealItemForm';

// every input form should have different id 
// to select them correctly
function MealItem(props) {
    return (
        <Fragment>
            <div className={style.meal}>
                <h3>{props.name}</h3>
                <p className={style.description}>{props.description}</p>
                <p className={style.price}>{props.price}</p>
            </div>
            <MealItemForm id={props.id}/>
        </Fragment>
    )
}

export default MealItem;