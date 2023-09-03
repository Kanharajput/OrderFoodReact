import style from './AvailableMeals.module.css';
import Card from './../UI/Card';
import MealItem from './../Meals/MealItem';

const meals = [
    { id: 1, name: 'Dal Bati', description: 'Rajasthan famous dish', price: '₹120'},
    { id: 2, name: 'Kaju katli', description: `Rajat's Favourite'`, price: '₹400'},
    { id: 3, name: 'Ras Malayi', description: 'Friend of Gulab Jamun', price: '₹300'},
    { id: 4, name: 'Gulab Jamun', description: 'Featured Item of the day', price: '₹200'},
    { id: 5, name: 'Sev Tamatar', description: 'My favourite dish', price: '₹140'},
    { id: 6, name: 'Halwa', description: 'Dont chew just swallow', price: '₹200'},
    { id: 7, name: 'Paneer', description: `Donkey's milk paneer is very costly`, price: '₹4000'}
];

function AvailableMeals(){
    return (
        <Card>
            <div className={style.meals}>
                <ul>
                    {meals.map((item) => {
                        return (
                          <li> {
                            <MealItem 
                              id={item.id} 
                              key={item.id} 
                              name={item.name} 
                              description={item.description} 
                              price={item.price}/>
                              }
                          </li>
                        )
                    })}
                </ul>
            </div>
        </Card>
    );
}

export default AvailableMeals;