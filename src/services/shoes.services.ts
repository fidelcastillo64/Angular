import { Injectable } from "@angular/core";
import { shoe } from '../app/configu/shoe';

@Injectable()

export class ShoesService{
        public shoes: Array<shoe>;
        colors: any;

        constructor(){
            this.shoes = [
                new shoe('Nike AirMax', 80, 'Red', 12),
                new shoe('Reebok Classic', 100, 'White', 5),
                new shoe('Adidas Superstar', 90, 'Black', 0),
                new shoe('Puma Future', 110, 'Blue', 15),
                new shoe('Reebok Classic', 100, 'White', 5),
              ];
        }
        getShoes() : Array<shoe>{
            return this.shoes;
        }
        getText(){
            return 'Hello World';
        }
    }
