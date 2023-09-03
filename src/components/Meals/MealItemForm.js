import Input from './Input';
import style from './MealItemForm.module.css';
import { useRef } from 'react';


function MealItemForm(props){

  const inputRef = useRef();
  
  const submitHandler = event => {
    event.preventDefault();
    console.log(inputRef.current.value);
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
        <button>+Add</button>
    </form>
  );
}

export default MealItemForm;