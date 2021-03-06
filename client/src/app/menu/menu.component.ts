import { Component, EventEmitter, OnInit } from '@angular/core';

import { MenuCategory } from '../model/menu_categories.model';
import { MenuItem } from '../model/menu_item.model';

import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuCategories!: MenuCategory[];
  menuItems!: MenuItem[];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getAllCategories().subscribe((categories) => { this.menuCategories = categories; });
    this.menuService.getAllItems("1").subscribe((items) => { this.menuItems = items; });
  }

  handleTabChange(index: EventEmitter<number>): void {
    // this.menuService.getAllItems(...).subscribe((items) => { this.menuItems = items; });
  }

}
