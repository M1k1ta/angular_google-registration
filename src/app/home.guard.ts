import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HomeGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }

  authenticateUser(token: string): boolean {
    localStorage.setItem('token', token);
    return true;
  }
}
