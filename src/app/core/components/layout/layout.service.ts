import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private readonly _sidenav: Subject<any> = new Subject();
  readonly sidenavListener$ = this._sidenav.asObservable();

  private readonly _activeRoute: Subject<any> = new Subject();
  readonly activeRouteListener$ = this._activeRoute.asObservable();

  constructor() { }

  private sidenav!: MatSidenav;

  public setSidenav(sidenav: MatSidenav) {
    return this._sidenav.next(sidenav);
  }

  public setActiveRoute(route: any) {
    return this._activeRoute.next(route);
  }

  public open() {
      return this.sidenav.open();
  }

  public close() {
      return this.sidenav.close();
  }

  public toggle(): void {
  this.sidenav.toggle();
 }


}
