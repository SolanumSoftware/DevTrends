import { Injectable } from '@angular/core';
import * as firebase from "@nativescript/firebase/app";
import { firestore } from '@nativescript/firebase/firebase';
import { Category } from 'src/Types/category.types';

@Injectable({ providedIn: 'root' })
export class ArticleService {
    private docRef: firestore.CollectionReference;
    constructor() {
        this.docRef = firebase.firestore().collection("DevTrends");
    }

    async getArticles() {
        return (await this.docRef.get({ source: "default" })).docs;
    }

    async getArticlesFilters(category: Category) {
        return (await this.docRef.where("category","==",category).get({ source: "default"})).docs;
    }
}