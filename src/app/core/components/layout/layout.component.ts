import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private observer: BreakpointObserver, private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.layoutService.sidenavListener$.subscribe(sidenav => {
      this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          sidenav.mode = 'over';
          sidenav.close();
        } else {
          sidenav.mode = 'side';
          sidenav.open();
        }
      });
    })
  }

}
