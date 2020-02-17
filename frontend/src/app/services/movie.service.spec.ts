import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MovieService } from './movie.service';


const dummyMovie = {
  page: Number,
  results: Array,
  total_pages: Number,
  total_results: Number
};


describe('MovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [MovieService]
  }));

  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });

  it('should use getmovies and return a result', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service.getMovies).not.toBeNull();
  });

  it('should use getmovie and return a result', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service.getMovie).not.toBeNull();
  });

  it('Searchmovies should return a result', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service.searchMovies.length).toBeGreaterThan(0);
  });

});
