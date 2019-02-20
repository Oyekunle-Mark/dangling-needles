import { Router } from 'express';

import MealController from '../model/mealController';
import MealMiddleware from '../middlewares/mealMiddleware';

const mealRoute = Router();

mealRoute.get('/meals/', MealController.getAllMeals);
mealRoute.post('/meals/', MealMiddleware.postMealCheck, MealController.postMeal);
mealRoute.put('/meals/:id', MealMiddleware.putMealCheck, MealController.putMeal);
mealRoute.delete('/meals/:id', MealMiddleware.deleteMealCheck, MealController.deleteMeal);

export default mealRoute;
