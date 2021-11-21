import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { MovieService } from 'src/app/core/http/apiMovies/movie.service';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  $moviesData!: Observable<any>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.$moviesData = this.moviesService.getApiMovies().pipe(
      tap({
        next: (resp) => console.log(resp)

      })
      );
  }

}
