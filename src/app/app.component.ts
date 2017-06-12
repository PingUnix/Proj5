import { Input, Component ,OnInit} from '@angular/core';
import { ExponentialStrengthPipe} from './exponential-strength.pipe';
import { PhonenumberPipe } from './phonenumber.pipe';
import {Hero} from './hero';
import {HEROES } from './mock-heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  birthday = new Date(1018, 3, 15); // April 15, 1988
  name =   "abACE";
  flag = true;
  formattime = 'shortDate';
  color_parm = 'red';
  margin_parm = '20px';
  heroes:Hero[];
  @Input() count='';
  @Input() power:number;
  @Input() expo:number;
  get format(){
    return this.flag? 'shortDate':'fullDate';

  } // here, format is a kind of special variable which is get by function 
  ToggleLe():any{
    
    this.flag = !this.flag;
    
  }
  ngOnInit(){
    this.getHeroes();
  }
  getHeroes(){
    this.heroes = HEROES;

    return this.heroes; 
  }
}
