import { getCustomRepository } from 'typeorm';
import ProductRepository from '../typeorm/reporitories/Product.repository';

interface IRequest {
  page: number;
  limit: number;
}

class ListProductService {
  public async execute({ page, limit = 10 }: IRequest) {
    const skip = (page - 1) * limit;

    const productRepository = getCustomRepository(ProductRepository);

    const [products, total] = await productRepository.findAndCount({
      skip,
      take: limit,
    });

    const totalPages = Math.ceil(total / limit);

    return {
      products,
      currentPage: Number(page),
      totalPages,
    };
  }
}

export default ListProductService;
