import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { bankGuardGuard } from 'src/app/guards/bank-guard.guard';
import { ConsultationsComponent } from './consultations/consultations.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionsComponent,
    canActivate: [bankGuardGuard],
  },
  {
    path: 'consultas',
    component: ConsultationsComponent,
    canActivate: [bankGuardGuard],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
