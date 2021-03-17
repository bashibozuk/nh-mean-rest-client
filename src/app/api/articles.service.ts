import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { HttpConfig, HTTP_CONFIG } from './config';
import { RestService } from './rest.service';

export interface Article {
    _id: string;
    title: string;
    text:string;
    visits: number;
    createdAt: Date;
    rating: number;
    authorId: string;
    categoryId: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticlesService extends RestService<Article> {

  collectionName() {
    return 'articles';
  }

  constructor(httpClient: HttpClient,
    @Inject(HTTP_CONFIG) config: HttpConfig) {
      super(httpClient, config)
  }
}
