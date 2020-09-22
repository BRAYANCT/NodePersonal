import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  public title:String;
  public subtitle:String;
  public email:String;
  constructor() { 
    this.title="BrayanCapcha";
    this.subtitle="Desarrollador Web";
    this.email="Brayancapchataype@gmail.com"
  }
 

  ngOnInit(): void {
  }

}
