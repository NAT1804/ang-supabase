import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

import { DynamicEnvironmentService } from '../configure/dynamic-environment.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  AUTH_API: string;

  constructor(
    private http: HttpClient,
    private dynamicEnvironmentService: DynamicEnvironmentService,
    private router: Router
  ) {
    this.AUTH_API = this.dynamicEnvironmentService.getConfig().authAPIUrl;
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      this.AUTH_API + 'signin',
      {
        username,
        password,
      },
      { headers: this.createDefaultHeaders() }
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      this.AUTH_API + 'signup',
      {
        username,
        email,
        password,
      },
      { headers: this.createDefaultHeaders() }
    );
  }

  logout(): Observable<any> {
    return this.http
      .post(
        this.AUTH_API + 'signout',
        {},
        { headers: this.createDefaultHeaders() }
      )
      .pipe(switchMap((_) => this.router.navigate(['home'])));
  }

  refreshToken(token: string | null): Observable<any> {
    return this.http.post(
      this.AUTH_API + 'refreshtoken',
      { refreshToken: token },
      { headers: this.createDefaultHeaders() }
    );
  }

  private createDefaultHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }
}
