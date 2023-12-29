import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = signal(false)
  sideNavWidth = computed(()=> this.collapsed()? '65px' : '250px');
}
