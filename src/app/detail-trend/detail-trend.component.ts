import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { LoadEventData } from '@nativescript/core';

@Component({
	selector: 'detail-trend',
	templateUrl: './detail-trend.component.html',
	styleUrls: ['./detail-trend.component.css']
})

export class DetailTrendComponent implements OnInit {

	load: boolean = true;
	html: string = "";
	constructor(
		private activatedRoute: ActivatedRoute,
		private router: RouterExtensions
	) { }

	ngOnInit() { 
		this.html = this.activatedRoute.snapshot.paramMap.get("url");
	}

	back() {
		this.router.back();
	}

	onLoadFinished(args: LoadEventData) {
		this.load = false;
	}
}