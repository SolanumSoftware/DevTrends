import { Component, OnInit } from '@angular/core';
import { MenuService } from "../menu.service";
@Component({
	selector: 'index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

	constructor(
		private serviceMenu: MenuService 
	) { }

	ngOnInit() { }

	openMenu() {
		this.serviceMenu.MenuEvent.emit(true);
		this.serviceMenu.OptionTaped.subscribe(response => {

		});
	}
}