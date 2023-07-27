import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ProductController from '../controllers/Products.controller';

const productsRouter = Router();
const productsControler = new ProductController();

productsRouter.get(
  '/',
  celebrate({
    //   // headers: Joi.object({
    //   //   authorization: Joi.string().required(),
    //   // }),
    [Segments.QUERY]: {
      page: Joi.number().required(),
      limit: Joi.number().required(),
    },
  }),
  productsControler.index,
);
productsRouter.get(
  '/:id',
  celebrate({
    // headers: Joi.object({
    //   authorization: Joi.string().required(),
    // }),
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  productsControler.show,
);
productsRouter.post('/', productsControler.create);
productsRouter.put(
  '/:id',
  celebrate({
    // headers: Joi.object({
    //   authorization: Joi.string().required(),
    // }),
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  productsControler.update,
);
productsRouter.delete(
  '/:id',
  celebrate({
    // headers: Joi.object({
    //   authorization: Joi.string().required(),
    // }),
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  productsControler.delete,
);

export default productsRouter;
