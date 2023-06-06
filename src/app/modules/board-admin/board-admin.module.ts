import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardAdminComponent } from './board-admin.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BoardAdminComponent,
  },
]

@NgModule({
  declarations: [BoardAdminComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [BoardAdminComponent],
})
export class BoardAdminModule {}
