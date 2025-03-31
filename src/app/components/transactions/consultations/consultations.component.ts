import { Component } from '@angular/core';

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.scss']
})
export class ConsultationsComponent {
  saldo: number = 1000000;
  transacciones: any[] = [
    { id: 1, fecha: '2023-10-01', monto: -50000, tipo: 'Compra en tienda' },
    { di: 2, fecha: '2023-10-02', monto: 200000, tipo: 'Depósito' },
  ]
}
