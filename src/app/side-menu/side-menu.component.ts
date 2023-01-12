import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private router:Router, private renderer: Renderer2, @Inject(DOCUMENT) private document:any) { }

  ngOnInit(): void {
  }
  
  goToEventList(){
    this.router.navigate(['/event_List']);
    // this.status ="actinve"
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
