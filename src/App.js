import Header from './components/Layout/Header';
import MealSummary from './components/Meals/MealSummary';
import AvailableMeals from './components/Meals/AvailableMeals';
import CartProvider from './store/cart-provider';


function App() {
  return (
    <CartProvider>
      <Header />
      <MealSummary />
      <AvailableMeals />
    </CartProvider>
  );
}

export default App;
