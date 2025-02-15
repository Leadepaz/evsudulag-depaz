import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutesModule } from './main-routes.module';
import { LoginComponent } from './login/login.component';
import { MainMaterialModule } from './main-material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    CommonModule,
    MainRoutesModule,
    MainMaterialModule,
    ReactiveFormsModule
  ]
})
export class MainUsersModule { }
