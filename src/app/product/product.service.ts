import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl : string;

  constructor(private http: HttpClient) { 
    this.productsUrl = "http://localhost:8080/api/products";
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  public deleteProduct(productId: number): Observable<string> {
    const url = `${this.productsUrl}/${productId}`;
    return this.http.delete<string>(url);
  }
}
