import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';
import { MatDialog } from '@angular/material/dialog';
import { CategoryEditDialogComponent } from './category-edit-dialog/category-edit-dialog.component';
import { CategoryCreateDialogComponent } from './category-create-dialog/category-create-dialog.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService,
    private dialog: MatDialog ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  edit(category: Category) {
    const dialogRef = this.dialog.open(CategoryEditDialogComponent, {
      width: '400px',
      data: category
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categoryService.getCategories().subscribe(
          data => {
            this.categories = data;
          },
          error => {
            console.error('Error updating category', error);
          }
        );
      }
    });
  }
  
  
  delete(categoryId: number): void {
    this.categoryService.deleteCategory(categoryId).subscribe(
      (response: string) => {
        console.log('Server response:', response);
        this.categories = this.categories.filter(category => category.id !== categoryId);
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
    }

    create() {
      const dialogRef = this.dialog.open(CategoryCreateDialogComponent, {
        width: '400px',
      });
    
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.categoryService.getCategories().subscribe(
            categories => {
              this.categories = categories;
            }
          )
          console.log('Category created successfully', result);
        }
      });
    }
}
