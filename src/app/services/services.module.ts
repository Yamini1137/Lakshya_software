import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { DevopsComponent } from './devops/devops.component';
import { BaseServicesComponent } from './base-services/base-services.component';


@NgModule({
  declarations: [
    DevopsComponent,
    BaseServicesComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
