import { Injectable } from '@angular/core';

import { IAppConfig } from '../../../utils/app-config';
import { AppConfigService } from './configure.service';

@Injectable()
export class DynamicEnvironmentService {
  constructor(private appConfigService: AppConfigService) {}

  public getConfig(): IAppConfig {
    return this.appConfigService.getConfig();
  }
}
