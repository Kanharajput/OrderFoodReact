import { Fragment } from 'react';
import Header from './components/Layout/Header';
import MealSummary from './components/Meals/MealSummary';
import AvailableMeals from './components/Meals/AvailableMeals';

function App() {
  return (
    <Fragment>
      <Header />
      <MealSummary />
      <AvailableMeals />
    </Fragment>
  );
}

export default App;
