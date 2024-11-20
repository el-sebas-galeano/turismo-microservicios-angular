import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly TOKEN_KEY = 'authToken';
  private readonly LOGIN_KEY = 'isLoggedIn';
  private readonly ROLE_KEY = 'userRole';

  private isLoggedInSubject = new BehaviorSubject<boolean>(this.getLoginStateFromStorage());
  private roleSubject = new BehaviorSubject<string | null>(this.getUserRoleFromStorage());

  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  role$ = this.roleSubject.asObservable();

  setLoginState(isLoggedIn: boolean, role: string | null = null): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(this.LOGIN_KEY, JSON.stringify(isLoggedIn));
      if (role) {
        localStorage.setItem(this.ROLE_KEY, role);
      } else {
        localStorage.removeItem(this.ROLE_KEY);
      }
    }
    this.isLoggedInSubject.next(isLoggedIn);
    this.roleSubject.next(role);
  }

  setToken(token: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(this.TOKEN_KEY, token);
    }
  }

  getToken(): string | null {
    return this.isLocalStorageAvailable() ? localStorage.getItem(this.TOKEN_KEY) : null;
  }

  getRole(): string | null {
    return this.roleSubject.getValue();  // Devuelve el valor actual del rol desde el BehaviorSubject
  }

  clearSession(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem(this.LOGIN_KEY);
      localStorage.removeItem(this.ROLE_KEY);
    }
    this.isLoggedInSubject.next(false);
    this.roleSubject.next(null);
  }

  private getLoginStateFromStorage(): boolean {
    return this.isLocalStorageAvailable() ? JSON.parse(localStorage.getItem(this.LOGIN_KEY) || 'false') : false;
  }

  private getUserRoleFromStorage(): string | null {
    return this.isLocalStorageAvailable() ? localStorage.getItem(this.ROLE_KEY) : null;
  }

  private isLocalStorageAvailable(): boolean {
    return typeof localStorage !== 'undefined';
  }
}
