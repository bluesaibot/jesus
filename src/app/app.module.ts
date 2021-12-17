import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {NgApexchartsModule} from "ng-apexcharts";
import { BackendListComponent } from './backend-list/backend-list.component';
import { HttpClientModule } from '@angular/common/http';
import {BackendService} from "./backend-service/backend.service";
import {MatExpansionModule} from "@angular/material/expansion";

import { MatTableModule } from "@angular/material/table";
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
  {path:'charts', component:ChartsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BackendListComponent,
    ChartsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    NgApexchartsModule,
    HttpClientModule,
    MatTableModule,
    MatExpansionModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    NavBarComponent,
    RouterModule,
    BackendListComponent
  ],
  providers: [BackendService],
  bootstrap: [
    AppComponent,
    NavBarComponent
  ]
})

export class AppModule { }
export class AppRoutingModule { }
