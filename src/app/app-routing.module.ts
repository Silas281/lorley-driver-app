import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwaitingComponent } from './components/awaiting/awaiting.component';
import { ChooseDestinationComponent } from './components/choose-destination/choose-destination.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'choose-destination', component: ChooseDestinationComponent },
  { path: 'awaiting', component: AwaitingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
