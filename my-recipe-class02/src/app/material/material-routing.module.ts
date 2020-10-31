import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DashComponent } from './dash/dash.component';
import { MaterialMenuComponent } from './menu/menu.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialMenuComponent,
    children: [
      {path: '', redirectTo: 'dash', pathMatch: 'full'},
      {path: 'contact', component: ContactComponent},
      {path: 'dash', component: DashComponent},
      {path: 'tree', component: TreeComponent},
      {path: '**', redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
