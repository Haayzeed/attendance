import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendanceStatusPage } from './attendance-status.page';

const routes: Routes = [
  {
    path: '',
    component: AttendanceStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceStatusPageRoutingModule {}
