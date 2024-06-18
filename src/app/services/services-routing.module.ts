import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrmComponent } from './crm/crm.component';
import { BaseServicesComponent } from './base-services/base-services.component';
import {ErpComponent } from './erp/erp.component';
import {BusinessComponent } from './business/business.component';
import {ProcurementComponent } from './procurement/procurement.component';
import {EnterpriseComponent } from './enterprise/enterprise.component';
import {HumanComponent } from './human/human.component';
import {CloudComponent } from './cloud/cloud.component';

const routes: Routes = [
  {
    path:'',component:BaseServicesComponent
  },
  {
    path:'crm',component:CrmComponent
  },
  {
    path:'erp',component:ErpComponent
  },
  {
    path:'business',component:BusinessComponent
  },
  {
    path:'procurement',component:ProcurementComponent
  },
  {
    path:'enterprise',component:EnterpriseComponent
  },
  {
    path:'human',component:HumanComponent
  },
  {
    path:'cloud',component:CloudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
