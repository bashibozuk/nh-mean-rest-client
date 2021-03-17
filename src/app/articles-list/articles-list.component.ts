import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Article, ArticlesService } from '../api/articles.service';
import { LoginService } from '../api/login.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  public title: string;

  public articles: Article[];

  public allowEdit: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, 
    private articlesService: ArticlesService,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(v => this.title = this.generateTitle(v));
    this.articlesService.all$().subscribe(v => this.articles = v);
    this.allowEdit = !!this.loginService.getUser();
  }

  generateTitle(params: Params): string {
    if (params.order === 'createdAt') {
      return 'Newest Articles';
    }

    if (params.order === 'visits') {
      return 'Most visited Articles';
    }

    if (params.author_id) {
      return 'Articles by author';
    }

    if (params.category_id) {
      return 'Articles by category';
    }

    return 'Articles';
  }

}
