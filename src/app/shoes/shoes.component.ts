import { Component, OnInit } from '@angular/core';
import { shoe } from '../configu/shoe';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrl: './shoes.component.css'
})
export class ShoesComponent implements OnInit{

  public shoes: Array<shoe>;
  constructor() {
    this.shoes = [
      new shoe('Nike AirMax', 80, 'Red', 12),
      new shoe('Reebok Classic', 100, 'White', 5),
      new shoe('Adidas Superstar', 90, 'Black', 10),
      new shoe('Puma Future', 110, 'Blue', 15)
    ];

  }

  ngOnInit(){
    
  }
}
