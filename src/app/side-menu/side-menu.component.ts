import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToEventList(){
    this.router.navigate(['/event_List']);
  }
  goToReservation(){
    this.router.navigate(['/reservation'])
  }
  goToBalence(){
    this.router.navigate(['/balence'])
  }
  goToHome(){
    this.router.navigate(['']);
  }
}
