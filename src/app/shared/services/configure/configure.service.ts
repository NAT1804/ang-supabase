import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, lastValueFrom } from 'rxjs';

import { PATH_TO_FILE_JSON_CONFIG } from '../../../utils/contants';
import { IAppConfig } from '../../../utils/app-config';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private config!: IAppConfig;

  constructor(private http: HttpClient) {}

  public getConfig(): IAppConfig {
    return this.config;
  }

  async load(): Promise<any> {
    try {
      const configResp: IAppConfig = await lastValueFrom(
        this.http.get(PATH_TO_FILE_JSON_CONFIG)
      ).then((data) => {
        return data as IAppConfig;
      });

      this.config = Object.assign({}, configResp);
    } catch (error) {
      throw error;
    }
  }
}

export function appConfigInit(appConfigService: AppConfigService) {
  return () => {
    return appConfigService.load();
  };
}
