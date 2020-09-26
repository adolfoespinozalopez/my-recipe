import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../interfaces/dish';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {

  @Input() dish: Dish;
  // @Input() name = 'ceviche';
  private _name: string;
  private _totalIngredients: number;

  get name(): string{
    return this._name;
  }
  @Input() set name(value: string){
    this._name = this.generateName(value);
    console.log(':: -> ', this._name);
  }
  constructor() { }

  ngOnInit(): void {
  }

  generateName(name: string): string{
    return 'El nombre es : ${name}';
  }

}
