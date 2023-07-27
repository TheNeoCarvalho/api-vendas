import { Request, Response } from 'express';
import CreateProductService from '../services/CreateProductService';
import DeleteProductService from '../services/DeleteProductService';
import ListProductService from '../services/ListProductService';
import ShowProductService from '../services/ShowProductService';
import UpdateProductService from '../services/UpdateProductService';

class ProductController {
  public async index(request: Request, response: Response) {
    const page = parseInt(request.query.page as string, 10) || 1;
    const limit = parseInt(request.query.limit as string, 10) || 10;

    const listProducts = new ListProductService();

    const products = await listProducts.execute({ page, limit });

    return response.json(products);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;

    const createProduct = new CreateProductService();

    const products = await createProduct.execute({ name, price, quantity });
    return response.json(products);
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;
    const showProduct = new ShowProductService();

    const product = await showProduct.execute({ id });
    return response.json(product);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, price, quantity } = request.body;
    const updateProduct = new UpdateProductService();

    const product = await updateProduct.execute({ id, name, price, quantity });
    return response.json(product);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteProduct = new DeleteProductService();

    const product = await deleteProduct.execute({ id });
    return response.json([]);
  }
}

export default ProductController;
