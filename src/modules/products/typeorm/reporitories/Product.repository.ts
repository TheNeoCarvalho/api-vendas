import { EntityRepository, Repository } from 'typeorm';
import ProductEntity from '../entities/Product.entity';

@EntityRepository(ProductEntity)
class ProductRepository extends Repository<ProductEntity> {
  public async findByName(name: string): Promise<ProductEntity | undefined> {
    const product = await this.findOne({
      where: {
        name,
      },
    });

    return product;
  }
}

export default ProductRepository;
