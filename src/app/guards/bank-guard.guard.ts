import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { State } from "../core/state";

@Injectable({providedIn: 'root'})
export class bankGuardGuard implements CanActivate {

  constructor(private router: Router, private state: State) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let email = '';
    this.state.user$.subscribe((value) => {
      console.log(value);
      email = value.email;
    });
    if (email == 'ruben.gonzalez@gmail.com') {

      return true;
    } else {
      this.router.navigate(['login']);
      return true;
    }
  }
}
