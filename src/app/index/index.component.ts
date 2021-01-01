import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MenuService } from "../menu.service";

@Component({
	selector: 'index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit, AfterViewInit {
	
	constructor(
		private serviceMenu: MenuService
	) { 
		
	}
	ngAfterViewInit(): void {
		
	}

	ngOnInit() { 
		
	}

	openMenu() {
		this.serviceMenu.MenuEvent.emit(true);
		this.serviceMenu.OptionTaped.subscribe(response => {

		});
	}

	
    
	
}