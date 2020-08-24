import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1, 'You are on Mute.','Author: Ian, Submitted by: Mwariri, Votes: 7'),
    new Quote(2, 'Man is what he wills himself to be.', 'Author: Albert, Submitted by: Liam, Votes: 700'),
    new Quote(3, 'Liberties arent given, they are taken.', 'Author: Ford, Submitted by: Henry, Votes: 1000'),
  ];

  toggleDetails(index){
    this.quotes[index].showQuoteDescription = !this.quotes[index].showQuoteDescription;
  }

  constructor() { }

  ngOnInit(){
  }

}
