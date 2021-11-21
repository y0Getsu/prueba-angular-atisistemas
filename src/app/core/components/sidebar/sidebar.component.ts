import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs';
import { LayoutService } from '../layout/layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @ViewChild(MatSidenav, { static: false }) sidenav!: MatSidenav;

  public menu = [
    {
      route: '/movies',
      name: 'Movies',
      icon: 'arrow_forward'
    },
    {
      route: '/actors',
      name: 'Actors',
      icon: 'arrow_forward'
    },
    {
      route: '/companies',
      name: 'Companies',
      icon: 'arrow_forward'
    },

  ];

  constructor(private layoutService: LayoutService, private cdRef: ChangeDetectorRef,
    public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cdRef.detectChanges();
    this.layoutService.setSidenav(this.sidenav);
  }

  isActive(item: any): boolean {
    if (this.router.isActive(this.router.createUrlTree([item.route], { relativeTo: this.route }).toString(),
      { paths: 'exact', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored' })) {
        this.layoutService.setActiveRoute(item);
        return true;
    }
    return false;
  }

}
