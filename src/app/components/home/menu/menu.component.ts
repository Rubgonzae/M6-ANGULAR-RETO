import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  menuList = [
    {
      name: 'Entrar',
      route: 'login'
    },
    {
      name: 'Transacciones',
      route: 'transacciones'
    },
    {
      name: 'Consultas',
      route: 'transacciones/consultas'
    },
    {
      name: 'Contacto',
      route: 'Contacto'
    },
    {
      name: 'Servicios',
      route: 'Servicios'
    },
    {
      name: 'Blog',
      route: 'Blog'
    },
    {
      name: 'FAQ',
      route: 'FAQ'
    }
    ]
}
