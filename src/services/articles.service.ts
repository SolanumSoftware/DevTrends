import { Injectable } from '@angular/core';
import * as firebase from "@nativescript/firebase/app";
import { firestore } from '@nativescript/firebase/firebase';
import { Articles } from "../models/Articles.model";

@Injectable({ providedIn: 'root' })
export class ArticleService {
    private docRef: firestore.CollectionReference;
    constructor() {
        this.docRef = firebase.firestore().collection("DevTrends");
    }

    async getArticles() {
        return (await this.docRef.get({ source: "default" })).docs;
    }
}