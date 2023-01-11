import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HomeComponent } from './home/home.component';
import { NewFormComponent } from './new-form/new-form.component';
import { EventListComponent } from './event-list/event-list.component';
import { ReservationComponent } from './reservation/reservation.component';
import { BalenceComponent } from './balence/balence.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HomeComponent,
    NewFormComponent,
    EventListComponent,
    ReservationComponent,
    BalenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
