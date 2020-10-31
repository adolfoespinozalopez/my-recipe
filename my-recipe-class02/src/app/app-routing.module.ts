import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path: '', redirectTo: 'app-mat-menu', pathMatch: 'full'},
  {path: 'menu', component: MenuComponent},
  {path: 'country', component: CountriesComponent},
  {path: 'order', component: OrderComponent},
  {
    path: 'app-mat-menu',
    loadChildren: './material/material.module#MaterialModule'
  },
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
