/* MODULES */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';


/* COMPONENTS */
import { LoginComponent, LoginDialogComponent } from '../views/login/login.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginDialogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }