import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/core/constants';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  url =  `${Constants.API_URL}/historial-transacciones/ultimas5/1`;
  constructor(
    private http: HttpClient,
  ) { }

  getHistory(): Observable<any> {
    return this.http.get(this.url);
  }
}
