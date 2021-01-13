import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { openUrl } from "@nativescript/core/utils";
import { RouterExtensions } from '@nativescript/angular';

@Component({
	selector: 'about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

	constructor(
		private serviceMenu: MenuService,
		private router: RouterExtensions
	) { }

	ngOnInit() { }

	openMenu() {
		this.serviceMenu.MenuEvent.emit(true);
	}

	link(url: string) {
		openUrl(url);
	}

	back() {
		this.router.back();
	}
}