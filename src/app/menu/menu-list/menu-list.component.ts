import { Component, OnInit } from '@angular/core';
import {MenuItem} from "./menu-item.model";
import {MenuService} from "../../menu.service";

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
  providers: [MenuService]
})

export class MenuListComponent implements OnInit {
  menuList: MenuItem[];
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuList = this.menuService.getMenu();
  }

}
