import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  REFRESH_TOKEN_KEY,
  TOKEN_KEY,
  USER_KEY,
} from '../../../utils/contants';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private isLoggedInSubject$: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );

  public isLoggedIn$: Observable<boolean> =
    this.isLoggedInSubject$.asObservable();

  constructor() {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      this.isLoggedInSubject$.next(true);
    } else {
      this.isLoggedInSubject$.next(false);
    }
  }

  clean(): void {
    window.localStorage.clear();
    this.isLoggedInSubject$.next(false);
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);

    const user = this.getUser();
    if (user.id) {
      this.saveUser({ ...user, accessToken: token });
    }
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  public saveRefreshToken(token: string): void {
    window.localStorage.removeItem(REFRESH_TOKEN_KEY);
    window.localStorage.setItem(REFRESH_TOKEN_KEY, token);
  }

  public getRefreshToken(): string | null {
    return window.localStorage.getItem(REFRESH_TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
    this.isLoggedInSubject$.next(true);
  }

  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn() {
    return this.isLoggedInSubject$.getValue();
  }
}
