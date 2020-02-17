import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  readonly URL = 'http://api.themoviedb.org/3/discover/movie?api_key=';
  readonly apikey: string;


  constructor(private http: HttpClient) { 

    this.apikey = 'a07f3928ffd867dcacc134577ac1a0c2';

  }



  getMovies(){

     return this.http.get(this.URL +   this.apikey  + '&sort_by=popularity.desc');

  }

  getMovie(id:string){
    
    return this.http.get('https://api.themoviedb.org/3/movie/'+id+'?api_key='+this.apikey);
        
  }

  searchMovies(searchStr:string){

    return this.http.get('https://api.themoviedb.org/3/search/movie?query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apikey);
  
  }

}
