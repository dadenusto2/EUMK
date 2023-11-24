import { Component } from '@angular/core';

@Component({
  selector: 'aa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  readonly menuItems = [
    { link: '/home', label: 'Главная', icon: null },
    { link: '/about', label: 'Об ЭУМК', icon: null },
    
  ];

  constructor() {}

}
