import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DynamicEnvironmentService } from '../configure/dynamic-environment.service';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  AUTH_API: string;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, private dynamicEnvironmentService: DynamicEnvironmentService) {
    this.AUTH_API = this.dynamicEnvironmentService.getConfig().authAPIUrl
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      this.AUTH_API + 'signin',
      {
        username,
        password,
      },
      this.httpOptions
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
      this.httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(this.AUTH_API + 'signout', { }, this.httpOptions);
  }
}
