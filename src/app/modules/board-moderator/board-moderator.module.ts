import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardModeratorComponent } from './board-moderator.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BoardModeratorComponent,
  },
]

@NgModule({
  declarations: [BoardModeratorComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [BoardModeratorComponent],
})
export class BoardModeratorModule {}
