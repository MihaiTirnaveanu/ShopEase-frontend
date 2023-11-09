import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesUrl : string;

  constructor(private http: HttpClient) { 
    this.categoriesUrl = "http://localhost:8080/api/categories";
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }
}
