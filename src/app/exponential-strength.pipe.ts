import { Pipe, PipeTransform } from '@angular/core';

/*usage: 
value| ExponentialStrength:exponent

{{2 | exponentialStrength:10}}
*/

@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: number, exponent:string): number {
    
    let exp  = parseFloat(exponent);
     return  Math.pow(value, isNaN(exp)? 1 : exp);
    
  }

}
