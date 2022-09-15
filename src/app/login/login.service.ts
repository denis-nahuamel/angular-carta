import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://challenge-react.alkemy.org/"
  constructor(private http: HttpClient) { }
  login(email: string, password:string): Observable<any>{
    return this.http.post(this.url,{
      email,
      password
    })
  }
}
