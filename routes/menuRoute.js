import { Router } from 'express';

import MenuController from '../model/menuController';
import MenuMiddleware from '../middlewares/menuMiddleware';

const menuRoute = Router();

menuRoute.post('/menu/', MenuMiddleware.postMenuCheck, MenuController.postMenu);
menuRoute.get('/menu/', MenuController.getMenu);

export default menuRoute;
