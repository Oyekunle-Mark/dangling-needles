import { Router } from 'express';

import MenuController from '../model/menuController';

const menuRoute = Router();

menuRoute.post('/menu/', MenuController.postMenu);
menuRoute.get('/menu/', MenuController.getMenu);

export default menuRoute;
