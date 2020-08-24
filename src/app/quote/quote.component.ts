import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    {id:1, quoteTitle:'You are on Mute.',quoteDescription:'Author: Ian, Submitted by: Mwariri, Votes: 7'},
    {id:2, quoteTitle:'Man is what he wills himself to be.',quoteDescription:'Author: Albert, Submitted by: Liam, Votes: 700'},
    {id:3, quoteTitle:'Liberties arent given, they are taken.',quoteDescription:'Author: Ford, Submitted by: Henry, Votes: 1000'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
