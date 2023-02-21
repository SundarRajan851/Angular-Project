import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MenuComponent } from './menu/menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';


@NgModule({
  declarations: [
    AdminComponent,
    MenuComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[
    MenuComponent,
    SideMenuComponent
  ]
})
export class AdminModule { }
