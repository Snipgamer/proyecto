import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  imagen: any[]=[
    {id:1, url:'../assets/Imagenes/arroz.jpg'},
    {id:2, url:'../assets/Imagenes/rollos.jpg'}

  ]
  constructor() {}

}
