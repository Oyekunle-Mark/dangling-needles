import { Router } from 'express';

import MealController from '../model/mealController';

const mealRoute = Router();

mealRoute.get('/meals/', MealController.getAllMeals);
mealRoute.post('/meals/', MealController.postMeal);
mealRoute.put('/meals/:id', MealController.putMeal);
mealRoute.delete('/meals/:id', MealController.deleteMeal);

export default mealRoute;
