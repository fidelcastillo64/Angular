import { Component, OnInit } from '@angular/core';
import { ShoesService } from '../../services/shoes.services';
import { shoe } from '../configu/shoe';


@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrl: './shoes.component.css',
  providers: [ShoesService]
})
export class ShoesComponent implements OnInit{

  public colors: String[] = [];
  public brandTem: string;
  public Mybrand: string[] = [];
  public TemColor: string | undefined;
  public shoes: Array<shoe> = [];

  constructor(
    private _shoesService: ShoesService
  ) {
    this.brandTem = 'nike';
  }

  ngOnInit(){
    this.getcolors();
    this.shoes = this._shoesService.getShoes();
  }
  getcolors(){
    this.shoes.forEach((shoe, index) => {
      if(this.colors.indexOf(shoe.color) < 0)
      this.colors.push(shoe.color);
    });
    console.log(this.colors);
  }

  getBrand(){
    this.Mybrand.forEach((brand, index) => {
      if(this.Mybrand.indexOf(brand) < 0)
        this.Mybrand.push(brand);
    });
  }
  addColor(){
    this.colors.push(this.TemColor!);
  }

  onBlur(){
    console.log("you out of the input field");
  }
  ShowWord(){
    alert(this.Mybrand);
  }

}
