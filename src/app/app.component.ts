import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes-IP';
  
  quotes:Quote[]=[
    {id:1, quoteTitle:'You are on Mute.'},
    {id:2, quoteTitle:'Man is what he wills himself to be.'},
    {id:3, quoteTitle:'Liberties arent given, they are taken.'},
  ];

  constructor(){
    this.quotes = [, , ]
  }

}
