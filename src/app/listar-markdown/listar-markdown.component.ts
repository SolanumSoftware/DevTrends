import { Component, OnInit } from '@angular/core';
import { ObservableArray } from "@nativescript/core/data/observable-array";
import { Articles } from '../../models/Articles.model';

@Component({
	selector: 'listar-markdown',
	templateUrl: './listar-markdown.component.html',
	styleUrls: ['./listar-markdown.component.css']
})

export class ListarMarkdownComponent implements OnInit {

	Listarmarkdown: Articles[] = [];
	dataSource = new ObservableArray<Articles>();

	constructor() { }

	ngOnInit() {
		this.dataSource.push(this.Listarmarkdown);
	}
}