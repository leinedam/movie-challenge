import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  title = 'Movies App';
  constructor(private movieService : MovieService, private route : ActivatedRoute) { }
 
  ngOnInit() {

    if(!this.route.snapshot.params.string){
      this.getMovies();
    }

  }

  getMovies(): void{
    this.movieService.getMovies()
    .subscribe(
      (res) => {
        this.movieService.movies =  res['results'];
        console.log(res);
      },
      (err) =>{
        console.error(err, 'errr');
      }
    )
  }

}
