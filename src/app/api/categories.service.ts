import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { HttpConfig, HTTP_CONFIG } from './config';
import { RestService } from './rest.service';

export interface Category {
  _id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends RestService<Category> {

  collectionName() {
    return 'categories';
  }

  constructor(httpClient: HttpClient,
    @Inject(HTTP_CONFIG) config: HttpConfig) {
      super(httpClient, config)
  }
}
