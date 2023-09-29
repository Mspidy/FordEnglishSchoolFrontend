import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle{
  screenWidth: number;
  collapsed:boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  constructor() { }
  collapsed = false
  screenWidth = 0;
  navData = navbarData

  ngOnInit(): void {
  }

  toggleCollapse(){
    this.collapsed = !this.collapsed
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }

  closeSidenav(){
    this.collapsed = false
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }
}
