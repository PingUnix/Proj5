import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
@Component({
  selector: 'hero-message',
  template: `
    <h2>Async Hero Message and AsyncPipe</h2>
    <p>Message: {{ msg|async}}</p>
    <button (click)="resend()">Resend</button>`,
})
export class HeroAsyncMessageComponent implements OnInit {
  msg: Observable<string>;
  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];
  constructor() {  }
  ngOnInit(){
    this.resend();
  }
  resend() {
    
    this.msg = Observable.interval(500)
      .map(i => this.messages[i])
      .take(this.messages.length);
  }
}
