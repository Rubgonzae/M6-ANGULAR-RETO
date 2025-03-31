import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class State {
  private _user = new BehaviorSubject<any>(null);

  get user$(): Observable<any> {
    return this._user.asObservable();
  }
  set user(value: any) {
    this._user.next(value);
  }
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  get isLoggedIn(): Observable<boolean> {
    return this._isLoggedIn.asObservable();
  }
}
