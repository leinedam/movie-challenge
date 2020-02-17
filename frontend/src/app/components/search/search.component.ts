import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchStr: string;
  public searchRes: Array<Object>;

  constructor(
    private movieService : MovieService,
    private router: Router) { 
    }

  ngOnInit() {

      this.getMovies();
  }

  getMovies(): void{
    this.movieService.getMovies()
    .subscribe(
      (res) => {
        this.movieService.movies =  res['results'];
        console.log(res);
        this.searchStr = "";
      },
      (err) =>{
        console.error(err, 'errr');
      }
    )
  }

  searchMovies(): void{
    if (this.searchStr == "" || this.searchStr == undefined || this.searchStr == null)
    {
        return
    }
    this.movieService.searchMovies(this.searchStr)
    .subscribe(
      (res) => {
        this.movieService.movies = res['results'];
        this.router.navigateByUrl('/');
      },
      (err) =>{
        console.error(err, 'errr');
      }
    )
  }


 


}
