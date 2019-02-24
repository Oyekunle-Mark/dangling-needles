import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';

import MealController from '../model/mealController';
import MealMiddleware from '../middlewares/mealMiddleware';

// swagger document
import swaggerDocument from '../swagger.json';

const mealRoute = Router();

// setup swagger
mealRoute.use('/', swaggerUi.serve);
mealRoute.get('/', swaggerUi.setup(swaggerDocument));

mealRoute.get('/meals/', MealController.getAllMeals);
mealRoute.post('/meals/', MealMiddleware.postMealCheck, MealController.postMeal);
mealRoute.put('/meals/:id', MealMiddleware.putMealCheck, MealController.putMeal);
mealRoute.delete('/meals/:id', MealMiddleware.deleteMealCheck, MealController.deleteMeal);

export default mealRoute;
