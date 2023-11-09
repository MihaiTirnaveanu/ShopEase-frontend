import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryService } from './category.service';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [
    CategoryService
  ]
})
export class CategoryModule { }
