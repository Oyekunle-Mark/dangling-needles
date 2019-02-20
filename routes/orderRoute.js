import { Router } from 'express';

import OrderController from '../model/orderController';
import OrderMiddleware from '../middlewares/orderMiddleware';

const orderRoute = Router();

orderRoute.post('/orders', OrderMiddleware.postOrderCheck, OrderController.postOrder);
orderRoute.put('/orders/:id', OrderMiddleware.putOrderCheck, OrderController.putOrder);
orderRoute.get('/orders', OrderController.getOrders);

export default orderRoute;
