import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public identifier: boolean = false;


  constructor() {

  }

  ngOnInit() {
    
  }
  setIdentified(){
    this.identifier = !this.identifier;
  }
}
