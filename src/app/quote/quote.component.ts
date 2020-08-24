import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    {id:1, quoteTitle:'You are on Mute.'},
    {id:2, quoteTitle:'Man is what he wills himself to be.'},
    {id:3, quoteTitle:'Liberties arent given, they are taken.'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
