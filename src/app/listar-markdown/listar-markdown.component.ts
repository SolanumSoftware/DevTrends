import { Component, OnInit } from '@angular/core';
import { ObservableArray } from "@nativescript/core/data/observable-array";
import { listamarkdown } from '../../models/listaMarkdown.model';

@Component({
	selector: 'listar-markdown',
	templateUrl: './listar-markdown.component.html',
	styleUrls: ['./listar-markdown.component.css']
})

export class ListarMarkdownComponent implements OnInit {

	Listarmarkdown: listamarkdown[] = [
		{ title: "Bases de datos cuadrante de gartner 2020", descripction: "Cuadrante de gartner 2020 databases" },
		{ title: "Bases de datos cuadrante de gartner 2020", descripction: "Cuadrante de gartner 2020 databases" }]
	datamarkdown = new ObservableArray<listamarkdown>();

	constructor() { }

	ngOnInit() {
		this.datamarkdown.push(this.Listarmarkdown);
	}
}