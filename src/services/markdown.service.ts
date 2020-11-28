import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class MarkdownService {
    constructor(
        private httpClient: HttpClient
    ) { }

    getMarked(urlMdFile: string) {
        return this.httpClient.get(urlMdFile, { responseType: 'text' });
    }

}