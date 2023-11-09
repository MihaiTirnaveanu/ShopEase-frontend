import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  edit(category: Category) {
    // Implement the edit functionality, you can open a dialog or navigate to another component for editing
    console.log('Edit category:', category);
  }

  delete(categoryId: number) {
    // Implement the delete functionality, you can show a confirmation dialog and then call the service to delete
    console.log('Delete category with ID:', categoryId);
  }
}
