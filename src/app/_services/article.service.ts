import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@/_models';
import {Article} from "@/_models/article";

@Injectable({ providedIn: 'root' })
export class ArticleService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${config.apiUrl}/articles`);
    }

    create(article: Article) {
        return this.http.post(`${config.apiUrl}/articles`, article);
    }

    update(article: Article) {
        return this.http.put(`${config.apiUrl}/articles`, article);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/articles/${id}`);
    }
}
