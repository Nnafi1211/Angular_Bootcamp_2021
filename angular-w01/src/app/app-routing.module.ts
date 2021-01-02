import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SupportComponent } from './pages/support/support.component';
import { ResourceComponent } from './pages/resource/resource.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  },
  {
    path: 'resource',
    component: ResourceComponent
  },
  {
    path: 'support',
    component: SupportComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
