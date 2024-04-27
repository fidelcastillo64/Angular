import { Component } from '@angular/core';
import { myConfig } from './configu/conf';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string;
  public description: string;
  public color: string;
  constructor() {
    this.title = myConfig.title;
    this.description = myConfig.description;
    this.color = myConfig.color;
  }
}
