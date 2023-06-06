import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DynamicEnvironmentService } from '../configure/dynamic-environment.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API_URL: string;
  constructor(
    private http: HttpClient,
    private dynamicEnvironemntService: DynamicEnvironmentService
  ) {
    this.API_URL = this.dynamicEnvironemntService.getConfig().userAPIUrl;
  }

  getPublicContent(): Observable<any> {
    return this.http.get(this.API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(this.API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(this.API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.API_URL + 'admin', { responseType: 'text' });
  }
}
