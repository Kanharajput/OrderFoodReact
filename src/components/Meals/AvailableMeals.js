import {Fragment} from 'react';
import style from './AvailableMeals.module.css';

const meals = [
    {name: 'Dal Bati'},
    {name: 'Kaju katli'},
    {name: 'Ras malai'},
    {name: 'Gula Jamun'},
    {name: 'Sev Tamatar'},

];

function AvailableMeals(){
    return (
        <Fragment>
            <div className={style.meals}>
                <ul>
                    {meals.map((item)=>{
                        return (<li>{item.name}</li>)
                    })}
                </ul>
            </div>
        </Fragment>
    );
}

export default AvailableMeals;