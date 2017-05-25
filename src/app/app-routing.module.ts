import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  {
    path: 'quotes',
    component: QuotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
