import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions/transactions.component';
import { CreaateoperationsComponent } from './creaateoperations/creaateoperations.component';
import { ConsultationsComponent } from './consultations/consultations.component';


@NgModule({
  declarations: [
    TransactionsComponent,
    CreaateoperationsComponent,
    ConsultationsComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule
  ]
})
export class TransactionsModule { }
