import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';
import { ObservableArray } from "@nativescript/core/data/observable-array";
import { Articles } from '../../models/Articles.model';
import * as Admob from "nativescript-admob";
import { Router } from '@angular/router';
import { ArticleService } from '../../services/articles.service';
import { ListViewEventData } from 'nativescript-ui-listview';
import { MenuService } from '../menu.service';
import { Category } from 'src/Types/category.types';

@Component({
	selector: 'list-articles',
	templateUrl: './list-articles.component.html',
	styleUrls: ['./list-articles.component.css']
})

export class ListArticlesComponent implements OnInit {
	filter: Category = "All";
	dataSource = new ObservableArray<Articles>();

	constructor(
		private articleService: ArticleService,
		private router: Router,
		private ngZone: NgZone,
		private menuService: MenuService
	) { }

	async ngOnInit() {
		
		this.menuService.OptionTaped.subscribe(async (Response: Category) => {
			this.filter = Response;
			this.loadData();
		});
		this.loadData();
	}

	async loadData() {
		this.dataSource = new ObservableArray<Articles>();
		if (this.filter != 'All') {
			(await this.articleService.getArticlesFilters(this.filter)).forEach(item => {
				this.dataSource.push(<Articles>item.data());
			});
		} else {
			(await this.articleService.getArticles()).forEach(item => {
				this.dataSource.push(<Articles>item.data());
			});
		}
	}
	async createSpam(url: string) {
		try {
			await Admob.showInterstitial();
			this.ngZone.run(() => {
				this.router.navigate(['/detail', url]);
			});
		} catch (error) {
			console.log("ads error", error);
		}
	}

	onItemSelected(args: ListViewEventData) {
		const obj = this.dataSource.getItem(args.index);
		this.createSpam(obj.url);
	}
}