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