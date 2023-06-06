import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { USER_KEY } from '../../../utils/contants';

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
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      this.isLoggedInSubject$.next(true);
    } else {
      this.isLoggedInSubject$.next(false);
    }
  }

  clean(): void {
    window.sessionStorage.clear();
    this.isLoggedInSubject$.next(false);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    this.isLoggedInSubject$.next(true);
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
