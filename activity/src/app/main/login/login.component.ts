import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: FormGroup;

  constructor(private fb: FormBuilder) {
    this.login = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get username(){
    return this.login.get('username');
  }
  get password(){
    return this.login.get('password');
  }

  onLogin() {
    if (this.login.valid) {
      console.log('Login Successful:', this.login.value);
    }
  }
}
