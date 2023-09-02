import Input from './Input';
import style from './MealItemForm.module.css';

function MealItemForm(){
    return (
        <div className={style.form}>
            <Input label="Amount"
              input={{
                type:"number",
                id:"amount",
                min:"1",
                max:"5",
                step:"1",
                defaultValue:"1"
              }}
            />        
            <button>+Add</button>
        </div>
    );
}

export default MealItemForm;