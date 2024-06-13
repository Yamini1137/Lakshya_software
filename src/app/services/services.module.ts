import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { DevopsComponent } from './devops/devops.component';
import { BaseServicesComponent } from './base-services/base-services.component';
import { ErpComponent } from './erp/erp.component';
import { CustomizedComponent } from './customized/customized.component';
import { ProcurementComponent } from './procurement/procurement.component';
import { BusinessComponent } from './business/business.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { HumanComponent } from './human/human.component';
import { CloudComponent } from './cloud/cloud.component';


@NgModule({
  declarations: [
    DevopsComponent,
    BaseServicesComponent,
    ErpComponent,
    CustomizedComponent,
    ProcurementComponent,
    BusinessComponent,
    EnterpriseComponent,
    HumanComponent,
    CloudComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
