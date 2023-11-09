import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { ProductComponent } from './product.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
