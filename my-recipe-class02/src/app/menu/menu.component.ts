import { Component, OnInit } from '@angular/core';
import { Dish } from '../interfaces/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  name = 'Adolfo';

  dish: Dish;

  dishes: Dish[] = [
  {
    name:'Arroz con pollo',
    ingredients:[
      {name: 'Zanahoria', qty: 2},
      {name: 'Pollo', qty: 4},
      {name: 'Culantro', qty: 1},
      {name: 'Ajo', qty: 1}
    ]
  },
  {
    name:'Ceviche',
    ingredients:[
      {name: 'Pescado', qty: 2},
      {name: 'Limon', qty: 4},
      {name: 'Aji', qty: 1},
      {name: 'Sal', qty: 1}
    ]
  }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }


}
