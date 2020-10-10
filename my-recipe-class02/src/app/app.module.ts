import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishComponent } from './dish/dish.component';
import { OrderComponent } from './order/order.component';
import { CountriesComponent } from './countries/countries.component';
import { FilesizePipe } from '@app/pipes';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishComponent,
    OrderComponent,
    CountriesComponent,
    FilesizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
