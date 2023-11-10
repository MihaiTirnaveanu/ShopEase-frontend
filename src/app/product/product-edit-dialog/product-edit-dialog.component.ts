// product-edit-dialog.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../product';

@Component({
  selector: 'app-product-edit-dialog',
  templateUrl: './product-edit-dialog.component.html',
  styleUrls: ['./product-edit-dialog.component.css']
})

// product-edit-dialog.component.ts
// ...
export class ProductEditDialogComponent implements OnInit {
  formInstance: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ProductEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {
    this.formInstance = new FormGroup({
      "name": new FormControl('', Validators.required),
      "specifications": new FormControl('', Validators.required),
      "stock": new FormControl('', Validators.required),
      "provider": new FormControl('', Validators.required),
      "description": new FormControl('', Validators.required),
    });

    this.formInstance.setValue({
      "name": data.name,
      "specifications": data.specifications,
      "stock": data.stock,
      "provider": data.provider,
      "description": data.description,
    });
  }

  ngOnInit(): void {}

  save(): void {
    const updatedProduct = new Product(
      this.data.id,  // Keep the id as it is not editable
      this.formInstance.value.name,
      this.formInstance.value.specifications,
      this.formInstance.value.stock,
      this.formInstance.value.provider,
      this.formInstance.value.description,
      this.data.categoryId
    );

    this.dialogRef.close(updatedProduct);
  }
}
