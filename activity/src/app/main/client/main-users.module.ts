import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutesModule } from './main-routes.module';
import { LoginComponent } from './pages/login/login.component';
import { MainMaterialModule } from './main-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({
  declarations: [ LoginComponent, ProfileComponent ],
  imports: [
    CommonModule,
    MainRoutesModule,
    MainMaterialModule,
    ReactiveFormsModule
  ]
})
export class MainUsersModule { }
