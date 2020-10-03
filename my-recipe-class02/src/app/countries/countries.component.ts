import { Component, OnInit } from '@angular/core';
import * as countries from '../../assets/countries.json';
import { Country } from '@app/models';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  providers: [UpperCasePipe]
})
export class CountriesComponent implements OnInit {

  selected: Country;
  birthday = new Date();
  total = 1234567890;

  constructor(private upperCasePipe: UpperCasePipe) {
    this.selected = countries[11];
    console.log(this.selected.name);
  }

  ngOnInit(): void {
  }

  send(name: string): void{
    console.log('Antes = ', name);
    name = this.upperCasePipe.transform(name);
    console.log('Despues = ', name);
  }
}
