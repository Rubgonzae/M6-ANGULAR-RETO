import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  private formBuilder = inject(FormBuilder);
  selectedTransaction: string = '';

  constructor() {

  }


  trxForm = this.formBuilder.group({
    transaction: ['', [Validators.required]],
    amount: [0, [Validators.required, Validators.min(1)]],
  });

  onSelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedTransaction = selectElement.value;
    console.log('transaccion seleccionada ', this.selectedTransaction);
  }

  onSubmit() {
    if (this.trxForm.valid) {
      const { transaction, amount } = this.trxForm.value;
      console.log('Transacción: ', transaction);
      console.log('Monto: ', amount);
      alert(`Transacción: ${transaction}, Monto: ${amount}`);
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }

  get transaction() {
    return this.trxForm.get('transaction');
  }




}
