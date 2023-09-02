import { Fragment } from "react";
import style from './MealSummary.module.css';


function MealSummary(){
    return (
        <Fragment>
            <div className={style.summary}>
                <h2>Delicious Food, Delivered To You</h2>
                <p>choose your favourite item from the list show below</p>
                <p>Your food will be delivered within 30 minutes :)</p>
            </div>
        </Fragment>
    );
}

export default MealSummary;