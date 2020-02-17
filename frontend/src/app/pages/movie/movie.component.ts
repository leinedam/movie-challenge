import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public id: string;
  public movie : Array<Object> = [];

  constructor(private route: ActivatedRoute,
    private movieService : MovieService) { 
    this.id = this.route.snapshot.paramMap.get("id")
  }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void{
    this.movieService.getMovie(this.id)
    .subscribe(
      (res) => {
        console.log(res);
        this.movie = res;
      },
      (err) =>{
        console.error(err, 'errr');
      }
    )
  }


}
