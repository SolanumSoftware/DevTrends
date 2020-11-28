import { Component, OnInit } from '@angular/core';
import { listamarkdown } from '../../models/listaMarkdown.model';

@Component({
	selector: 'listar-markdown',
	templateUrl: './listar-markdown.component.html',
	styleUrls: ['./listar-markdown.component.css']
})

export class ListarMarkdownComponent implements OnInit {
	Listarmarkwoen: listamarkdown[] = [
		{ title: "Bases de datos cuadrante de gartner 2020", descripction: "Cuadrante de gartner 2020 databases" },
		{ title: "Bases de datos cuadrante de gartner 2020", descripction: "Cuadrante de gartner 2020 databases" }]

	constructor() { }
	ngOnInit() { }
}