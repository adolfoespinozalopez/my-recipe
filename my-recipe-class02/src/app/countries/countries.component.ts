import { Component, OnInit } from '@angular/core';
import * as countries from '../../assets/countries.json';
import { Country } from '@app/models';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  selected: Country;

  constructor() {
    this.selected = countries[7];
    console.log(this.selected.name);
  }

  ngOnInit(): void {
  }

}
