import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  collapse=signal(false)

  sideNavCollapse = computed(()=> this.collapse()? '64px':'250px')
}
