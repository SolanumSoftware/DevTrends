import { Component, OnInit } from '@angular/core';
import {MENU_OPTIONS } from "../../models/Categorys.model";

@Component({
	selector: 'menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

	public ListOptions = MENU_OPTIONS;
	constructor() { }

	ngOnInit() { }
}