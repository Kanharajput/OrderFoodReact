import Input from './Input';
import style from './MealItemForm.module.css';
import { useRef } from 'react';


function MealItemForm(props){

  const inputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();

    const itemCount = inputRef.current.value;
    const itemCountNo = +itemCount;            // convert to number

    if(itemCount.trim().length === 0 || itemCountNo < 1 || itemCountNo > 5){
      return;
    }
    // upper component has all the data regarding items 
    // so get items to order list from their
    props.addItemToCart(itemCountNo);
  }
  
  return (
    <form className={style.form} onSubmit={submitHandler}>
        <Input label="Amount"
          ref ={inputRef}
          input ={{
            type:"number",
            id:props.id,
            min:"1",
            max:"5",
            step:"1",
            defaultValue:"1"
          }}
        />        
        <button type="submit">+Add</button>
    </form>
  );
}

export default MealItemForm;