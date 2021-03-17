import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../api/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  email: string;
  password: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.email, this.password)
      .subscribe((v) => {
        this.router.navigate([''])
      })
  }

}
