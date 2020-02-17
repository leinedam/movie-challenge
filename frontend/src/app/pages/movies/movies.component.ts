import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies = [];

  constructor(private movieService : MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(){
    this.movieService.getMovies()
    .subscribe(
      (res) => {
        console.log(res['results']);
        this.movies = res['results'];
      },
      (err) =>{
        console.error(err, 'errr');
      }
    )
  }



}
