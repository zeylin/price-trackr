import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { AddPriceComponent } from './pages/add-price/add-price.component';
import { DynamicsComponent } from './pages/dynamics/dynamics.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { ApiService } from './api/api.service';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OverviewComponent,
    AddPriceComponent,
    DynamicsComponent,
    ArchiveComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
