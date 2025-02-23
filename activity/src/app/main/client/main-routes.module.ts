import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'profile',
  component: ProfileComponent
},
{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutesModule { }
