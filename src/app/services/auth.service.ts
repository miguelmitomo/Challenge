import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { DataService } from './data.service';
import { Router } from '@angular/router';

export interface LogInData{
  name: string;
  password: string;
}

export interface ResponseData{
  message: string;
  token: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  public logged: boolean = false;
  private _token: string = "";

  constructor(private httpClient: HttpClient, private dataService: DataService, private router: Router) { }

  public logIn(data: LogInData) {
    this.httpClient.post<ResponseData>("http://localhost:8989/auth", data).subscribe(
      (res:ResponseData) => {
        this.ResponseHandler(res);
      },
      (error: HttpErrorResponse) => {
        this.ErrorsHandler(error);
      }
    );
  }

  public autoLogin() {
    const token: string = localStorage.getItem('token');
    if (!token) {
      return
    }
    this._token = token;
    this.logged = true;
  }

  private ErrorsHandler(error: HttpErrorResponse) {
    switch (error.status) {
      case 401:
          alert("Usuario y/o contraseña incorrecto.")
        break;
      default:
        alert("Error de loggin no controlado.")
        break;
    }
  }

  private ResponseHandler(res: ResponseData) {
    if(res.message === "Login success!"){
      this._token = res.token;
      localStorage.setItem('token', this._token)
      this.logged = true;
      this.router.navigate(['/table']);
    }
  }

  public getToken() {
    return this._token;
  }

  public clearToken() {
    this._token = '';
  }
}
