import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIdPageRoutingModule } from './course-id-routing.module';

import { CourseIdPage } from './course-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIdPageRoutingModule
  ],
  declarations: [CourseIdPage]
})
export class CourseIdPageModule {}
