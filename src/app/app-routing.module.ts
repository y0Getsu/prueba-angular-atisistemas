import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/movies' },
  { path: 'movies', loadChildren: () => import('./modules/movies/movies.module').then(m => m.MoviesModule) },
  { path: 'actors', loadChildren: () => import('./modules/actors/actors.module').then(m => m.ActorsModule) },
  { path: 'companies', loadChildren: () => import('./modules/companies/companies.module').then(m => m.CompaniesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
