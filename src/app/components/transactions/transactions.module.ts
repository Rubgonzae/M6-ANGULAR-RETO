import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultationsComponent } from './consultations/consultations.component';
import { CreaateoperationsComponent } from './creaateoperations/creaateoperations.component';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions/transactions.component';


@NgModule({
  declarations: [
    TransactionsComponent,
    CreaateoperationsComponent,
    ConsultationsComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TransactionsModule { }
