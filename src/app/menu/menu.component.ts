import { Component, OnInit } from '@angular/core';
import {Category, MENU_OPTIONS } from "../categorys.model"
import { MenuService } from '../menu.service';
@Component({
	selector: 'menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

	public selected: Category = 'All'; 
	public ListOptions = MENU_OPTIONS;
	constructor(
		private menuService: MenuService
	) { }

	ngOnInit() { }

	select(taped: Category) {
		this.selected = taped;
		this.menuService.OptionTaped.emit(taped);
	}
}