import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, LogInData, ResponseData } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private AuthService: AuthService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      let logData: LogInData = {
        name: this.loginForm.get('username').value,
        password: this.loginForm.get('password').value,
      };

      this.AuthService.logIn(logData)
    }
  }

}
