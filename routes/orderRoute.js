import { Router } from 'express';

import OrderController from '../model/orderController';

const orderRoute = Router();

orderRoute.post('/orders', OrderController.postOrder);
orderRoute.put('/orders/:id', OrderController.putOrder);
orderRoute.get('/orders', OrderController.getOrders);

export default orderRoute;
