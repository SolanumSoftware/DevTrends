import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';
import { ObservableArray } from "@nativescript/core/data/observable-array";
import { Articles } from '../../models/Articles.model';
import * as Admob from "nativescript-admob";
import { Router } from '@angular/router';
import { ArticleService } from '../../services/articles.service';
import { ListViewEventData} from 'nativescript-ui-listview';

@Component({
	selector: 'list-articles',
	templateUrl: './list-articles.component.html',
	styleUrls: ['./list-articles.component.css']
})

export class ListArticlesComponent implements OnInit, AfterViewInit {

	private androidInterstitialId: string = "ca-app-pub-4435922828829303/5329219275";
	data: Articles[] = [];
	dataSource = new ObservableArray<Articles>();

	constructor(
		private articleService: ArticleService,
		private router: Router,
		private ngZone: NgZone
	) { }

	async ngOnInit() {
		(await this.articleService.getArticles()).forEach( item => {
			this.dataSource.push(<Articles>item.data());
		});
	}

	async ngAfterViewInit() {
		/* await setTimeout(() => {
			this.ngZone.run(() => {
				Admob.preloadInterstitial({
					testing: true,
					androidInterstitialId: this.androidInterstitialId,
				});
			});
		}, 0); */
	}

	async createSpam(urlFile: string) {
		try {
			await Admob.showInterstitial();
			this.ngZone.run(() => {
				this.router.navigate(['/detail', urlFile]);
			});
		} catch (error) {
			console.log("ads error", error);
		}
	}

	onItemSelected(args: ListViewEventData) {
		const obj = this.dataSource.getItem(args.index);
		this.createSpam(obj.urlFile);
	}
}