import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCheckboxModule, MatSlideToggleModule,
 MatInputModule, MatCardModule, MatIconModule,
 MatToolbarModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AuthenticateService } from '../services/authenitcate.service';
import { AuthGuardService } from '../services/auth-guard.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';

const ROUTES = [
  { path: '', component: SearchComponent, canActivate: [ AuthGuardService ] },
  { path: 'login', component: LoginComponent },
  { path: '**',  redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ AuthenticateService, AuthGuardService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
