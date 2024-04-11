import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-hola',
  templateUrl: './hola.component.html',
  styleUrl: './hola.component.css'
})
export class HolaComponent implements OnInit, DoCheck, OnDestroy{
  public title: string;
  public description: string;
  constructor() {
    this.title = 'Hola';
    this.description = 'Hola mundo desde Angular';
  }
  ngOnInit() {
    console.log('OnInit HolaComponent');
  }
  ngDoCheck() {
    console.log('DoCheck HolaComponent');
  }
  ngOnDestroy() {
    console.log('OnDestroy HolaComponent');
  }

  public changetitle() {
    this.title = 'change title';
  }
}
