import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchStr: string;
  searchRes:Array<Object>;

  constructor(private movieService : MovieService) { }

  ngOnInit() {
  }

  searchMovies(){
    this.movieService.searchMovies(this.searchStr)
    .subscribe(
      (res) => {
        console.log(res);
      },
      (err) =>{
        console.error(err, 'errr');
      }
    )
  }

}
