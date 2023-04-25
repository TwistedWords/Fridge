import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter;

  collapsed = false;
  data = navbarData;
  screenWidth = 0;
  open_close_nav = 'chevron_right';

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit() :void {
    this.screenWidth = window.innerWidth;
    if ( this.screenWidth < 767 ) {
      this.collapsed = false;
      this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth
      });
    }
  }

  toggleCollapse() {

    this.collapsed = !this.collapsed

    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth
    });

    if ( this.collapsed ) {
      this.open_close_nav = 'chevron_left'
    } else {
      this.open_close_nav = 'chevron_right'
    }

  }
}
