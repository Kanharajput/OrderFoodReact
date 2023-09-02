import style from './MealItem.module.css';

function MealItem(props) {
    return (
        <div className={style.meal}>
            <h3>{props.name}</h3>
            <p className={style.description}>{props.description}</p>
            <p className={style.price}>{props.price}</p>
        </div>
    )
}

export default MealItem;