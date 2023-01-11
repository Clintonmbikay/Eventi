import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {

  constructor() { }
  step : number = 1;
  stepperNext(){
    this.step += 1;
  }
  stepperPrev(){
    this.step -= 1;
  }

  ngOnInit(): void {
  }

}
