import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/core/constants';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {
  url = `${Constants.API_URL}/transacciones/realizar?`;
  constructor(
    private http: HttpClient,
  ) { }

  createOperation(reqOperation: any): Observable<any> {
    return this.http.post(this.url, reqOperation);
  }
}
