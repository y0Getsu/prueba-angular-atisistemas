import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';

// const SHARED_COMPONENTS = [
// ];

// const SHARED_DIRECTIVES = [

// ];


// const SHARED_PIPES= [

// ];


@NgModule({
  declarations: [
    // SHARED_COMPONENTS,
    // SHARED_DIRECTIVES,
    // SHARED_PIPES
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
