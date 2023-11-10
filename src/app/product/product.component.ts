import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductEditDialogComponent } from './product-edit-dialog/product-edit-dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  products: Product[] = [];

  constructor(private productService: ProductService, private dialog: MatDialog ) {

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  edit(product: Product) {
    const dialogRef = this.dialog.open(ProductEditDialogComponent, {
      width: '400px',
      data: product
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.updateProduct(result).subscribe(
          data => {
            this.products = data;
            console.log('Product updated successfully');
          },
          error => {
            console.error('Error updating product', error);
          }
        );
      }
    });
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
