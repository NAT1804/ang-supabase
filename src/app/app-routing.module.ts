import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./modules/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/board-user/board-user.module').then(
        (m) => m.BoardUserModule
      ),
  },
  {
    path: 'mod',
    loadChildren: () =>
      import('./modules/board-moderator/board-moderator.module').then(
        (m) => m.BoardModeratorModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/board-admin/board-admin.module').then(
        (m) => m.BoardAdminModule
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
