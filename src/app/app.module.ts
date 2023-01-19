import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

import { DiverHomeComponent } from './components/driver-components/diver-home/diver-home.component';
import { OngoingRideComponent } from './components/ongoing-ride/ongoing-ride.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/driver-components/login/login.component';
import { AccountComponent } from './components/driver-components/account/account.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { EarningComponent } from './components/driver-components/earning/earning.component';
import { CompleteSignUpComponent } from './complete-sign-up/complete-sign-up.component';
import { ConfirmPriceComponent } from './components/dialogs/confirm-price/confirm-price.component';
import { AuthService } from './services/auth.service';
import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire/compat';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    DiverHomeComponent,
    OngoingRideComponent,
    ConfirmDialogComponent,
    SignUpComponent,
    LoginComponent,
    AccountComponent,
    BottomNavComponent,
    EarningComponent,
    CompleteSignUpComponent,
    ConfirmPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    HttpClientModule,
    GooglePlaceModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue:{hasBackdrop: false}}, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
