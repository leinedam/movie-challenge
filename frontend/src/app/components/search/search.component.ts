import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchStr: string;
  searchRes: Array<Object>;

  constructor(private movieService : MovieService) { }

  ngOnInit() {
     this.getMovies();
  }

  getMovies(){
    this.movieService.getMovies()
    .subscribe(
      (res) => {
        console.log(res);
        this.movieService.movies =  res['results'];
        this.searchStr = "";
      },
      (err) =>{
        console.error(err, 'errr');
      }
    )
  }

  searchMovies(){
    if (this.searchStr == "" || this.searchStr == undefined || this.searchStr == null)
    {
        return
    }
    this.movieService.searchMovies(this.searchStr)
    .subscribe(
      (res) => {
        console.log(res);
        this.movieService.movies = res['results'];
      },
      (err) =>{
        console.error(err, 'errr');
      }
    )
  }


 


}
