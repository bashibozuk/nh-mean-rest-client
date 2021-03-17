import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { HTTP_CONFIG, HTTP_CONFIG_DETAILS } from './config';
import { AuthorsService } from './authors.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-Token',
      headerName: 'XSRF-Token'
    })
  ],
  providers: [{
    provide: HTTP_CONFIG,
    useValue: HTTP_CONFIG_DETAILS
  }, AuthorsService],
  exports: [
  ]
})
export class ApiModule { }
