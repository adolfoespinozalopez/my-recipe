import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Country } from '../interfaces/countries.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountriesServiceService implements OnDestroy{

  private url = 'https://restcountries.eu/rest/v2/all';
  private urlCode = 'https://restcountries.eu/rest/v2';
  private destroyAll$: Subject<void> = new Subject<void>();

  constructor(private http: HttpClient) {

  }

  getList(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url);
  }

  ngOnDestroy(): void{
    this.destroyAll$.next();
    this.destroyAll$.complete();
    this.destroyAll$.unsubscribe();
  }
}
