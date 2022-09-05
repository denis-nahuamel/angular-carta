import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from '../url-api';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  getAllRecipes():Observable<any>{
   return this.http.get(url("recipes/complexSearch"));
  }
}
