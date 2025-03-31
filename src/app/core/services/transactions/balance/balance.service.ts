import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/core/constants';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  url = `${Constants.API_URL}/cuentas/1`;
  constructor(
    private http: HttpClient,
  ) { }
  getBalance(): Observable<any> {
    return this.http.get(this.url);
  }
}
