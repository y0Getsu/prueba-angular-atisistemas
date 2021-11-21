import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl = `${environment.baseUrl}`;
  apiUrl = `${environment.apiMovies}`
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${this.baseUrl}/${this.apiUrl}`
   }

  public getMovies(): Observable<any>{
    return this.http.get(this.url);
  }
}
