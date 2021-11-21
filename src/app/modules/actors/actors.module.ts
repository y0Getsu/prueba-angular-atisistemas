import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorsRoutingModule } from './actors-routing.module';
import { ActorsComponent } from './pages/actors.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ActorsComponent
  ],
  imports: [
    CommonModule,
    ActorsRoutingModule,
  ]
})
export class ActorsModule { }
