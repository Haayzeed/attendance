import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIdPage } from './course-id.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIdPageRoutingModule {}
