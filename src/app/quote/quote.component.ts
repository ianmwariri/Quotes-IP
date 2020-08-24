import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1, 'Believe in yourself, and others will too.','Author: Ian, Submitted by: Mwariri, Votes: 7', new Date(2020,8,20)),
    new Quote(2, 'Man is what he wills himself to be.', 'Author: Albert, Submitted by: Liam, Votes: 700', new Date(2020,7,23)),
    new Quote(3, 'Liberties arent given, they are taken.', 'Author: Ford, Submitted by: Henry, Votes: 1000', new Date(2020, 3,3)),
  ];

  toggleDetails(index){
    this.quotes[index].showQuoteDescription = !this.quotes[index].showQuoteDescription;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete "${this.quotes[index].quoteTitle}"?`)
     
      if (toDelete){
        this.quotes.splice(index,1)
      }
      
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    // quote.quoteTitle
    quote.postedDate = new Date(quote.postedDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(){
  }

}
