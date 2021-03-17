import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { Author, AuthorsService } from '../api/authors.service';
import { CategoriesService, Category } from '../api/categories.service';
import { LoginService, User } from '../api/login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  authors: Author[];

  categories: Category[];

  user: User | null;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
  private authorsService: AuthorsService,
  private categoriesService: CategoriesService,
  private loginService: LoginService,
  private changeDetector: ChangeDetectorRef) {}
  
  ngOnInit() {
    this.authorsService.all$().subscribe(v => this.authors = v);
    this.categoriesService.all$().subscribe(v => this.categories = v);
    this.user = this.loginService.getUser();
    this.loginService.user$.pipe(tap(v => console.log('new user', v))).subscribe((v) => this.user = v);
  }
}
