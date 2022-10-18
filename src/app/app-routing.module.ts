import { OngoingRideComponent } from './components/ongoing-ride/ongoing-ride.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwaitingComponent } from './components/awaiting/awaiting.component';
import { ChooseDestinationComponent } from './components/choose-destination/choose-destination.component';
import { HomeComponent } from './components/home/home.component';
import { DiverHomeComponent } from './components/driver-components/diver-home/diver-home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/driver-components/login/login.component';
import { AccountComponent } from './components/driver-components/account/account.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'choose-destination', component: ChooseDestinationComponent },
  { path: 'awaiting', component: AwaitingComponent },
  {path: 'driver-home', component: DiverHomeComponent},
  {path: 'ongoing-ride',component: OngoingRideComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'account', component: AccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
