import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './components/shared/shared.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StorageService } from './services/storage/storage.service';
import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [SharedComponent, NavbarComponent],
  imports: [CommonModule, SharedRoutingModule],
  providers: [
    StorageService,
    UserService,
    AuthService,
  ],
  exports: [NavbarComponent],
})
export class SharedModule {}
