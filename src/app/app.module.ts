import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChooseDestinationComponent } from './components/choose-destination/choose-destination.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AwaitingComponent } from './components/awaiting/awaiting.component';
import { DiverHomeComponent } from './components/driver-components/diver-home/diver-home.component';
import { OngoingRideComponent } from './components/ongoing-ride/ongoing-ride.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    ChooseDestinationComponent,
    AwaitingComponent,
    DiverHomeComponent,
    OngoingRideComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GooglePlaceModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue:{hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
