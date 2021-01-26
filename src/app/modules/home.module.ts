/* MODULES */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from '../app-routing.module';


/* COMPONENTS */
import { HomeComponent } from '../views/home/home.component';
import { NavComponent } from '../components/template/nav/nav.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  exports: [
    NavComponent
  ]
})
export class HomeModule { }
