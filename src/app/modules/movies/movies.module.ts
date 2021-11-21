import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MoviesComponent } from './pages/movies/movies.component';

@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
  ]
})
export class MoviesModule { }
