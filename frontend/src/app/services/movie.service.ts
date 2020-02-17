import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies = [];

  readonly apiUrl = environment.backendUrl + '/api/movies';

  constructor(private http: HttpClient) { }

  getMovies(){

     return this.http.get(this.apiUrl);

  }

  getMovie(id:string){

    return this.http.get(this.apiUrl + '/' + id);
        
  }

  searchMovies(searchStr:string){

    return this.http.get(this.apiUrl + '/search/' + searchStr);
  
  }

}
