import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './variable/landing-page/landing-page.component';
import { ContactPageComponent } from './variable/contact-page/contact-page.component';

const routes: Routes = [
  { path: '', component:LandingPageComponent },
  { path:'contact', component:ContactPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
