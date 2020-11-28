import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { MarkdownService } from '../../services/markdown.service'
const marked = require("marked");

@Component({
	selector: 'detail-trend',
	templateUrl: './detail-trend.component.html',
	styleUrls: ['./detail-trend.component.css']
})

export class DetailTrendComponent implements OnInit {

	urlFile: string;
	html: string = "";
	constructor(
		private activatedRoute: ActivatedRoute,
		private router: RouterExtensions,
		private markdownService: MarkdownService
	) { }

	ngOnInit() { 
		this.urlFile = this.activatedRoute.snapshot.paramMap.get("urlFile");
		this.markdownService.getMarked(this.urlFile).subscribe(Response => {
			this.html = marked(Response);
		}, error => this.html = "");
	}

	back() {
		this.router.back();
	}
}