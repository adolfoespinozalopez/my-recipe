import { Component, OnInit } from '@angular/core';
import * as countries from '../../assets/countries.json';
import { Country } from '../interfaces/countries.interface';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  selected: Country;

  constructor() {
    this.selected = countries[8];
    console.log(this.selected.capital);
  }

  ngOnInit(): void {
  }

}
