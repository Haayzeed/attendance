import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'attendance',
    loadChildren: () => import('./attendance/attendance.module').then( m => m.AttendancePageModule)
  },
  {
    path: 'take-attendance',
    loadChildren: () => import('./take-attendance/take-attendance.module').then( m => m.TakeAttendancePageModule)
  },
  {
    path: 'course-id',
    loadChildren: () => import('./course-id/course-id.module').then( m => m.CourseIdPageModule)
  },
  {
    path: 'view-course',
    loadChildren: () => import('./view-course/view-course.module').then( m => m.ViewCoursePageModule)
  },
  {
    path: 'attendance-status',
    loadChildren: () => import('./attendance-status/attendance-status.module').then( m => m.AttendanceStatusPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
