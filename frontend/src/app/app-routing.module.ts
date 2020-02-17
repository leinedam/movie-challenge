import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";

import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movie/movie.component';

const routes: Routes = [
    {
      path: 'movies',
      component: MoviesComponent,
      data: { title: 'Movies List' }
    },
    { path: '',
      redirectTo: '/movies',
      pathMatch: 'full'
    },
    {
      path: 'movie/:id',
      component: MovieComponent,
      data: { title: 'Movie detail' }
    },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterTestingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
