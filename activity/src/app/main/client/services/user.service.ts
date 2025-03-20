import { Injectable } from '@angular/core';
import { UserModelData } from '../model/UserModel';
import { UserDetailData } from '../mock/UserData';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private CurrentUser: UserModelData | null = null;

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post('http://localhost:8000/authenticate', user)

    // if (user) {
    //   this.CurrentUser = user;
    //   return true;
    // }
    // return false;
  }

  // getCurrentUser(): UserModelData | null {
  //   return this.CurrentUser;
  // }
}
