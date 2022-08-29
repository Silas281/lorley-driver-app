import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChooseDestinationComponent } from './components/choose-destination/choose-destination.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AwaitingComponent } from './components/awaiting/awaiting.component';
import { DiverHomeComponent } from './components/driver-components/diver-home/diver-home.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    ChooseDestinationComponent,
    AwaitingComponent,
    DiverHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GooglePlaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
