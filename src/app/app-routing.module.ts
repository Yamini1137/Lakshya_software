import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'AboutUs', component: AboutComponent },
  { path: 'ContactUs', component: ContactComponent },
  { path: 'Blog', component: BlogComponent },
  // { path: 'Services', component: ServicesComponent },
  { path: 'Services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule), },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
