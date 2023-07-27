import productsRouter from '@modules/products/routes/products.routes';
import { Request, Response, Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);

routes.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Hello Dev' });
});

export default routes;
