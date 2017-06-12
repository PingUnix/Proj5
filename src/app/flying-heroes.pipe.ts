import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './hero';

@Pipe({
  name: 'flyingHeroes'
})
export class FlyingHeroesPipe implements PipeTransform {

  transform(heroes: Hero[]): any {
    var h:Hero[] = [];
    for(let p of heroes){
      if(p.name === "Dr IQ"){

        console.log(p.name +p.id);
        h.push(p);
      }  
  }
    return h;
  }

}
