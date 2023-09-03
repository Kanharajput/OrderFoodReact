### How to access the cdn link item.
- At last every component is settled at index.html page, so add cdn link to that file and access what we want in any component as all component are render over it.
- Course instructor uses svg format to get the icon for that he created a separate component and return svg from there. 

### Object destructuring in props
```
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
```

> Inside Input component this all props can be destructured and assign to input field with this small piece of code.

```
return (
<input {...props.input}>
)
```

### Who needs the props
- CartIcon having badge(count of item to order).(It's parent comp is Header)
- Cart having the selected item data. (It's parent comp is Header)
- MealItem needs the list of food item. (It's parent comp is AvailableMeals)
- Header and AvailableMeals parent comp is App. so we are going to wrap everything inside the App by CartProvider which
  is an comp of CartContext

  