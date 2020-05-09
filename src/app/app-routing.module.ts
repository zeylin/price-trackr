import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';
import { AddPriceComponent } from './pages/add-price/add-price.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { DynamicsComponent } from './pages/dynamics/dynamics.component';
import { DetailsComponent } from './pages/details/details.component';


const routes: Routes = [
  {
    path: 'home',
    component: OverviewComponent
  },
  {
    path: 'add',
    component: AddPriceComponent
  },
  {
    path: 'dynamics',
    component: DynamicsComponent
  },
  {
    path: 'archive',
    component: ArchiveComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
