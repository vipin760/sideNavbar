import { Component, Input, computed, signal } from '@angular/core';

export type MenuItem = {
  icon: string;
  label:string;
  route:string
}

@Component({
  selector: 'app-custom-sidenav',
  templateUrl: './custom-sidenav.component.html',
  styleUrls: ['./custom-sidenav.component.css']
})
export class CustomSidenavComponent {

  sideNavCollapsed = signal(false);
  @Input() set collapsed(val:boolean){
    this.sideNavCollapsed.set(val)
  }

  menuItems = signal<MenuItem[]>([
    {
      icon:'home',
      label:'home',
      route:'home'
    },
    {
      icon:' local_library',
      label:'about',
      route:'about'
    },
    {
      icon:'local_laundry_service',
      label:'service',
      route:'service'
    }
  ])
  profilePicSize = computed(()=> this.sideNavCollapsed()? '32' : '100')
  
}
