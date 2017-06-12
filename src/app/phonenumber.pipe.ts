import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonenumber'
})
export class PhonenumberPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    if(value.toString()){
    var str = value.toString().substring(0,3);
    // + "-";
    str = str + "-";
    var str1 = value.toString().substring(3,6);
    str1 = str1 + "-";
    var str2 = value.toString().substring(6,10);
    str2 = str2 ;
    return str + str1 + str2;
    
  }}

}
