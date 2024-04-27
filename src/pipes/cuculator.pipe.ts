
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'calculator'
})
export class CalculatorPipe implements PipeTransform {
    //data calculator
    //param 1 
    transform(value: any, value2: any) {
        let result = `
        sum = ${value + value2} 
        sub = ${value - value2} 
        mul = ${value * value2} 
        div = ${value / value2} 
        `;
        return result;
    }
}