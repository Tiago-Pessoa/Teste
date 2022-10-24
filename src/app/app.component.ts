import { Component } from '@angular/core';
import { MenuItem } from './core/models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lista Telefônica';
  menuItems: MenuItem[] =[
  {
    icon:'tag_faces',
    routerLink: '/dashboard',
    toolTipText: 'Preferidos',
  },
  {
    icon:'account_box',
    routerLink: '/contatos',
    toolTipText: 'Contatos',
  },
];
}
