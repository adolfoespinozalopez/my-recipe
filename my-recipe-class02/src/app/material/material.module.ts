import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialRoutingModule } from './material-routing.module';
import { ContactComponent } from './contact/contact.component';
import { MaterialMenuComponent } from './menu/menu.component';
import { TreeComponent } from './tree/tree.component';
import { DashComponent } from './dash/dash.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialAllModule } from '../material-all.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactComponent,
    MaterialMenuComponent,
    TreeComponent,
    DashComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MaterialRoutingModule,
    MaterialAllModule,
    ReactiveFormsModule
  ]
})
export class MaterialModule { }
