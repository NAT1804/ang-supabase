import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardUserComponent } from './board-user.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BoardUserComponent,
  },
];

@NgModule({
  declarations: [BoardUserComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [BoardUserComponent],
})
export class BoardUserModule {}
