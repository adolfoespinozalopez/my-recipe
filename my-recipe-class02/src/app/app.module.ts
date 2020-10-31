import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishComponent } from './dish/dish.component';
import { OrderComponent } from './order/order.component';
import { CountriesComponent } from './countries/countries.component';
import { FilesizePipe } from '@app/pipes';
import { BoxShadowDirective } from './directives/box-shadow.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialAllModule } from './material-all.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishComponent,
    OrderComponent,
    CountriesComponent,
    FilesizePipe,
    BoxShadowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
