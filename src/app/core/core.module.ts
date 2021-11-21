import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from './http/http.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    LayoutComponent

  ]
})
export class CoreModule { }
