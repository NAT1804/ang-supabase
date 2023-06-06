import { Injectable } from '@angular/core';

import { PATH_TO_FILE_JSON_CONFIG } from '../../../utils/contants';
import { IAppConfig } from '../../../utils/app-config';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private config!: IAppConfig;

  public getConfig(): IAppConfig {
    return this.config;
  }

  async load(): Promise<any> {
    try {
      const configResp: IAppConfig = await fetch(PATH_TO_FILE_JSON_CONFIG).then(
        (data) => {
          if (data.ok) {
            return data.json();
          }
          return null
        }
      );

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
