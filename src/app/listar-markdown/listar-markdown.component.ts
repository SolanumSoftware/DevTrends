import { Component, OnInit } from '@angular/core';
import { ObservableArray } from "@nativescript/core/data/observable-array";
import { Articles } from '../../models/Articles.model';

@Component({
	selector: 'listar-markdown',
	templateUrl: './listar-markdown.component.html',
	styleUrls: ['./listar-markdown.component.css']
})

export class ListarMarkdownComponent implements OnInit {

	Listarmarkdown: Articles[] = [
		{ tittle: "hola mundo", description: "hola mundo", category: "Agile",datePublish: "lo que sea", urlFile:"url" },
		{ tittle: "hola mundo", description: "hola mundo", category: "BI",datePublish: "lo que sea", urlFile:"url" },
		{ tittle: "hola mundo", description: "hola mundo", category: "BackEnd",datePublish: "lo que sea", urlFile:"url" },
		{ tittle: "hola mundo", description: "hola mundo", category: "Agile",datePublish: "lo que sea", urlFile:"url" },
		{ tittle: "hola mundo", description: "hola mundo", category: "Agile",datePublish: "lo que sea", urlFile:"url" },
		{ tittle: "hola mundo", description: "hola mundo dsaldksañknañsnkadñadñsmdsadlkasñdsañldkdlasdsadñksadsadjasdlñkasjdlsdkasjdlskdjasldkasjdlskadjasdlksjdsakldjsdlksadjhsadlksdhsakldhaslkdjña", category: "Agile",datePublish: "lo que sea", urlFile:"url" }
	];
	dataSource = new ObservableArray<Articles>();

	constructor() { }

	ngOnInit() {
		this.dataSource.push(this.Listarmarkdown);
	}
}