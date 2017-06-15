import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'REALITY PCC SHOW AND SHARE AS NAKORNPATHOM';


  ngOnInit() {
    this.loadJq();
  }
  loadJq() {
    jQuery(".button-collapse").sideNav();
  }
}