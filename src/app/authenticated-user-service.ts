import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedUserService implements CanActivate {

  constructor(private router: Router) {}

  accessToken = localStorage.getItem('accessToken');

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (this.accessToken) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
