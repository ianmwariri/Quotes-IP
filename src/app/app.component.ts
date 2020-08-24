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
    new Quote(1, 'You are on Mute.','Author: Ian, Submitted by: Mwariri, Votes: 7', new Date(2020,8,20)),
    new Quote(2, 'Man is what he wills himself to be.', 'Author: Albert, Submitted by: Liam, Votes: 700', new Date(2020,7,23)),
    new Quote(3, 'Liberties arent given, they are taken.', 'Author: Ford, Submitted by: Henry, Votes: 1000', new Date(2020, 3,3)),
  ];

  toggleDetails(index){
    this.quotes[index].showQuoteDescription = !this.quotes[index].showQuoteDescription;
  }

  constructor(){
    this.quotes = [, , ]
  }

}
