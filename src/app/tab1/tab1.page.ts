import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  imagen: any[]=[
    {id:1, url:'../assets/Imagenes/arroz.jpg', String: 'Arroz'},
    {id:2, url:'../assets/Imagenes/rollos.jpg', String: 'Rollos de huevo fritos'},
    {id:3, url:'../assets/Imagenes/brochetas.jpg', String: 'Brochetas de verduras'},
    {id:4, url:'../assets/Imagenes/enchiladas.jpg', String: 'Enchiladas'},
    {id:5, url:'../assets/Imagenes/salmon teri.jpg', String: 'Salmon teriyaki'},
    {id:6, url:'../assets/Imagenes/salmon ver.jpg', String: 'Salmon con verduras'},
    {id:7, url:'../assets/Imagenes/tacos.jpg', String: 'Tacos de res'},
    {id:8, url:'../assets/Imagenes/tacos.jpg', String: 'Tacos de suadero'}

  ];
 

  constructor() {}

}
