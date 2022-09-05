import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://challenge-react.alkemy.org/"
  constructor(private http: HttpClient) { }
  login(email: string, password:string){
    return this.http.post(this.url,{
      email,
      password
    })
  }
}
