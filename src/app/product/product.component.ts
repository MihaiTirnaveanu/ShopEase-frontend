import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  products: Product[] = [];

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  edit(product: Product) {

  }

  delete(productId: number): void {
  this.productService.deleteProduct(productId).subscribe(
    (response: string) => {
      console.log('Server response:', response);
      this.products = this.products.filter(product => product.id !== productId);
    },
    (error) => {
      console.error('Error deleting product:', error);
    }
  );
  }

}
