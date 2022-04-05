import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
 text:string="my first component is ready";
  getYourName(){
    document.write("Angular");
  } 
 constructor() { }

  ngOnInit(): void {
  }

}
