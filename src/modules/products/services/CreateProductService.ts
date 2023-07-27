import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ProductEntity from '../typeorm/entities/Product.entity';
import ProductRepository from '../typeorm/reporitories/Product.repository';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}
class CreateProductService {
  public async execute({
    name,
    price,
    quantity,
  }: IRequest): Promise<ProductEntity> {
    const productRepository = getCustomRepository(ProductRepository);

    const productExists = await productRepository.findByName(name);

    if (productExists)
      throw new AppError('There is already one product with this name!');

    const product = productRepository.create({
      name,
      price,
      quantity,
    });

    await productRepository.save(product);
    return product;
  }
}

export default CreateProductService;
