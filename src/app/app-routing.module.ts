import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';
import { AddPriceComponent } from './pages/add-price/add-price.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { DynamicsComponent } from './pages/dynamics/dynamics.component';


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
