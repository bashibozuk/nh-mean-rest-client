import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpConfig, HTTP_CONFIG } from './config';

export interface User {
  _id: string;
  name: string;
  email: string;
}

interface LoginResponse {
  user: User;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user$: BehaviorSubject<User> = new BehaviorSubject(null);

  token$: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor(private http: HttpClient, 
    @Inject(HTTP_CONFIG) private config: HttpConfig) { }

  getUser() : User | null {
    return this.user$.getValue();
  }

  login(email: string, password: string): Observable<any> {
    const url = `${this.config.serverAddress}/login`
    // .subscribe((v) => console.log('login response', v))
    return this.http.post<LoginResponse>(url, {email, password}).pipe(
      tap((v) => {
        this.token$.next(v.token);
        this.user$.next(v.user);
      })
    )
  }
}
