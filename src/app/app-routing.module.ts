import { OngoingRideComponent } from './components/ongoing-ride/ongoing-ride.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { DiverHomeComponent } from './components/driver-components/diver-home/diver-home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/driver-components/login/login.component';
import { AccountComponent } from './components/driver-components/account/account.component';
import { EarningComponent } from './components/driver-components/earning/earning.component';

const routes: Routes = [
  { path: '', component: DiverHomeComponent },
  {path: 'driver-home', component: DiverHomeComponent},
  {path: 'ongoing-ride',component: OngoingRideComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'account', component: AccountComponent},
  {path: 'earning', component: EarningComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
