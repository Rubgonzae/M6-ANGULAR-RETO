import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  selectedTransaction: string = '';

  onSelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedTransaction = selectElement.value;
    console.log('transaccion seleccionada ', this.selectedTransaction);
  }

}
