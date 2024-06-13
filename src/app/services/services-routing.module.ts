import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevopsComponent } from './devops/devops.component';
import { BaseServicesComponent } from './base-services/base-services.component';

const routes: Routes = [
  {
    path:'',component:BaseServicesComponent
  },
  {
    path:'devops',component:DevopsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
