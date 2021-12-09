import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Person{
  id: number;
  name: string;
  age: number;
  photo: string;
  nif: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private httpClient: HttpClient) {}

  public data: Person[]= [{id:1, name:"adsd", age:22, photo:"dasd",nif:"dasd"}];

  public getData(token: string) {
    this.httpClient
      .get<Person[]>('http://localhost:8989/data', {
        headers: new HttpHeaders(
          {
            'Content-Type':  'application/json',
            Authorization: 'Bearer ' + token
          }
        )
      })
      .subscribe(
        (response) => {
          this.data = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
