import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
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
    const { username, password } = this.login.value;
    if (this.userService.login(username, password)) {
      this.router.navigate(['/main/profile']);
    } else {
      console.log('error');
    }
  }
}
