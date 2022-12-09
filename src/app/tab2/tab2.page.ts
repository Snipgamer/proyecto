import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  imagen: any[]=[
    {id:1, url:'../assets/Imagenes/pantalon 1.jpg', String: '$ 200.00 pantalon'},
    {id:2, url:'../assets/Imagenes/camisa.jpg', String: '$ 90.00 camisa'},
    {id:3, url:'../assets/Imagenes/vestido.jpg', String: '$ 2000.00 vestido'},
    {id:4, url:'../assets/Imagenes/zapatos.jpg', String: '$ 100.00 zapatos'},
    {id:5, url:'../assets/Imagenes/camisa 2.jpg', String: '$ 90.00 camisa'},
    {id:6, url:'../assets/Imagenes/pantalon 2.jpg', String: '$ 200.00 pantalon'},
    {id:7, url:'../assets/Imagenes/pantalon 3.jpg', String: '$ 200.00 pantalon'},
    {id:8, url:'../assets/Imagenes/pantalon 1.jpg', String: '$ 200.00 pantalon'}

  ]
  constructor() {}

}
