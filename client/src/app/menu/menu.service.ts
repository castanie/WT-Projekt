import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { MenuCategory } from 'src/app/model/menu_categories.model';
import { MenuItem } from 'src/app/model/menu_item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<MenuCategory[]> {
    return this.http.get<MenuCategory[]>("http://localhost:3000/menu/categories");
  }

  getAllItems(category: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>("http://localhost:3000/menu/categories/" + category);
  }
}
