import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendanceStatusPageRoutingModule } from './attendance-status-routing.module';

import { AttendanceStatusPage } from './attendance-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendanceStatusPageRoutingModule
  ],
  declarations: [AttendanceStatusPage]
})
export class AttendanceStatusPageModule {}
