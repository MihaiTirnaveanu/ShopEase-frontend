export class Product {
    id: number;
    name: string;
    specifications: string;
    stock: number;
    provider: string;
    description: string;
    categoryId: number;
    cost: number;
  
    public constructor(
      id: number,
      name: string,
      specifications: string,
      stock: number,
      provider: string,
      description: string,
      categoryId: number,
      cost: number,
    ) {
      this.id = id;
      this.name = name;
      this.specifications = specifications;
      this.stock = stock;
      this.provider = provider;
      this.description = description;
      this.categoryId = categoryId;
      this.cost = cost;
    }
  }
  