import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, Subject, Subscription, takeUntil } from 'rxjs';
import { LayoutService } from '../layout/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  sidenav!: MatSidenav;
  title = '';

  sidenavSubscriber = new Subject();

  constructor(private layoutService: LayoutService, private cdRef: ChangeDetectorRef) {
   }

  ngOnInit(): void {
    this.layoutService.sidenavListener$.pipe(takeUntil(this.sidenavSubscriber)).subscribe(sidenav => this.sidenav = sidenav);
  }

  ngAfterContentInit(): void {
    this.layoutService.activeRouteListener$.subscribe(resp => {
      this.title = resp.name;
      this.cdRef.detectChanges();
    })
  }

  ngOnDestroy(): void {
    this.sidenavSubscriber.complete();
  }
}





