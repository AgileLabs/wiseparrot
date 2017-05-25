import { Injectable } from '@angular/core';

import { Quote } from './shared/quote.model';
import { QUOTES } from './shared/quotes.database';

@Injectable()
export class QuoteService {

  private quotes: Quote[];

  constructor() {
    this.init();
  }

  getQuotes(): Quote[] {
    return this.quotes;
  }

  private init(): void {
    this.quotes = QUOTES;
  }
}
