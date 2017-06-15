import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  constructor() { }
  apiKey: number = 20;
  ngOnInit() {

  }


  sho(ev) {
    this.apiKey = ev;
  }

}
