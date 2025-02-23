import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModelData } from '../../model/UserModel';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user: UserModelData | null;

  constructor(private userService: UserService) {
    this.user = this.userService.getCurrentUser();
  }
}
