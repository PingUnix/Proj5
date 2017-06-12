import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {FlyingHeroesPipe} from './flying-heroes.pipe';

@Component({
  selector: 'app-flying-heroes',
  templateUrl: './flying-heroes.component.html',
  styleUrls: ['./flying-heroes.component.css']
})
export class FlyingHeroesComponent implements OnInit {
  heroes: Hero[] = [];
  canFly  = true;

  constructor() {this.reset(); }
  addHero(name:string){
    var id = 21;
    name = name.trim();
    if(!name){return;}
    let hero = {id, name};
    this.heroes.push(hero);

  }
  reset(){
    this.heroes = HEROES.slice();

  }
  ngOnInit() {
  }

}
