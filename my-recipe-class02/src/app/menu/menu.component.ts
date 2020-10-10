import { Component, OnInit } from '@angular/core';
import { Dish } from '../interfaces/dish';
import * as dishesJSON from '../../assets/dishes.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  name = 'Adolfo';

  dish: Dish;
  dishes: Dish[];

  constructor() {
    this.dishes = dishesJSON.dishes;
  }

  ngOnInit(): void {
  }

  show(value: boolean): string{
    return value ? 'block' : 'none';
  }

  validateStock(value: boolean): string{
    return value ? 'stock' : 'no-stock';
  }

  showSpicy(value: number): string{
    return (value > 2) ? 'spicy' : 'no-spicy';
  }

}
