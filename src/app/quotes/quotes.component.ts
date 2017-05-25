import { Component, OnInit } from '@angular/core';

import { Quote } from './shared/quote.model';
import { QuoteService } from './quote.service';

@Component({
  selector: 'wpa-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[];

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.quotes = this.quoteService.getQuotes();
  }
}
