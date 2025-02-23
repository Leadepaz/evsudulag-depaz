import { Injectable } from '@angular/core';
import { UserModelData } from '../model/UserModel';
import { UserDetailData } from '../mock/UserData';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private CurrentUser: UserModelData | null = null;

  login(username: string, password: string) : boolean {
    const user = UserDetailData.find(u => u.username === username && u.password === password);

    if (user) {
      this.CurrentUser = user;
      return true;
    }
    return false;
  }

  getCurrentUser(): UserModelData | null {
    return this.CurrentUser;
  }
}
