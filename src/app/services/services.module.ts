import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { CrmComponent } from './crm/crm.component';
import { BaseServicesComponent } from './base-services/base-services.component';
import { ErpComponent } from './erp/erp.component';
import { CustomizedComponent } from './customized/customized.component';
import { ProcurementComponent } from './procurement/procurement.component';
import { BusinessComponent } from './business/business.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { HumanComponent } from './human/human.component';
import { CloudComponent } from './cloud/cloud.component';
import { AiComponent } from './ai/ai.component';
import { IotComponent } from './iot/iot.component';


@NgModule({
  declarations: [
    CrmComponent,
    BaseServicesComponent,
    ErpComponent,
    CustomizedComponent,
    ProcurementComponent,
    BusinessComponent,
    EnterpriseComponent,
    HumanComponent,
    CloudComponent,
    AiComponent,
    IotComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
