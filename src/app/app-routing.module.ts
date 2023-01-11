import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalenceComponent } from './balence/balence.component';
import { EventListComponent } from './event-list/event-list.component';
import { HomeComponent } from './home/home.component';
import { NewFormComponent } from './new-form/new-form.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'new-form',component:NewFormComponent},
  {path:'event_List',component:EventListComponent},
  {path:'reservation',component:ReservationComponent},
  {path:'balence',component:BalenceComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
