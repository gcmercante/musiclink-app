/* MODULES */
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './modules/home.module';
import { LoginModule } from './modules/login.module';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';


/* COMPONENTS */
import { AppComponent } from './app.component';
import { MainComponent } from './components/template/main/main.component';

/* DIRECTIVES */

@NgModule({
    declarations: [
        AppComponent,
        MainComponent
    ],
    imports: [
        AppRoutingModule,
        HomeModule,
        LoginModule,
        MatButtonModule,
        MatSnackBarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
