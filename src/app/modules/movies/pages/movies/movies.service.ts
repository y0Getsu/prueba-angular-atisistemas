import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MovieService } from 'src/app/core/http/apiMovies/movie.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private readonly _movies: BehaviorSubject<any> = new BehaviorSubject(null);
  readonly moviesListener$ = this._movies.asObservable();

  constructor(private movieService: MovieService) { }

  getApiMovies(): Observable<any> {
    return this.movieService.getMovies();
  }

  getMovies(): Observable<any> {
    return this._movies.getValue();
  }

  setMovies(movies: any) {
    this._movies.next(movies);
  }

}
