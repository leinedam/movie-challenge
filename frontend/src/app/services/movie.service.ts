import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public movies : Array<Object>  = [];
  readonly apiUrl = environment.backendUrl + '/api/movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Object>{
     return this.http.get(this.apiUrl);
  }

  getMovie(id:string): Observable<any>{
    return this.http.get(this.apiUrl + '/' + id);
  }

  searchMovies(searchStr:string): Observable<Object>{
    return this.http.get(this.apiUrl + '/search/' + searchStr  );
  }

}
