import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ProductEntity from '../typeorm/entities/Product.entity';
import ProductRepository from '../typeorm/reporitories/Product.repository';
interface IRequest {
  id: string;
}
class ShowProductService {
  public async execute({ id }: IRequest): Promise<ProductEntity> {
    const productRepository = getCustomRepository(ProductRepository);

    const product = await productRepository.findOne(id);

    if (!product) throw new AppError('Product not found');

    return product;
  }
}

export default ShowProductService;
