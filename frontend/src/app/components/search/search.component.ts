import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  public searchStr: string;
  public searchRes: Array<Object>;

  constructor(
    private movieService : MovieService,
    private router: Router) { 
   }

  searchMovies(): void{
    if (this.searchStr == "" || this.searchStr == undefined || this.searchStr == null)
    {
        return
    }
    this.movieService.searchMovies(this.searchStr)
    .subscribe(
      (res) => {
        this.router.navigate(['/search',this.searchStr ]);
        this.movieService.movies = res['results'];
      },
      (err) =>{
        console.error(err, 'errr');
      }
    )
  }

  resetMovies(): void{
    this.movieService.getMovies()
    .subscribe(
      (res) => {
        this.movieService.movies =  res['results'];
        this.searchStr = "";
      },
      (err) =>{
        console.error(err, 'errr');
      }
    )
  }
 


}
