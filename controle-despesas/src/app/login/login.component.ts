import { Component, OnInit } from '@angular/core';

import { Constants } from '../util/constants';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { WebStorageUtil } from '../util/web-storage-util';
import { UserStorageService } from '../user/user-storage.service';
import { Shared } from '../util/shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserStorageService]
})
export class LoginComponent implements OnInit {
  user!: User;
  users?: User[];
  loginUser!: User;

  constructor(private loginService: LoginService, private userService: UserStorageService) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.users = this.userService.getUsers();
    this.loginUser = new User('', '');
    WebStorageUtil.set(Constants.USERNAME_KEY , JSON.stringify(new User('root', 'root' , true)));
    this.user = WebStorageUtil.get(Constants.USERNAME_KEY);
    console.log (this.user);
  }

  onLogin() {
    this.user = WebStorageUtil.get(Constants.USERNAME_KEY);
    console.log("login: " + this.loginUser.username)
    console.log("user: " + this.user)
    
    if (
      this.loginUser.username == this.user.username &&
      this.loginUser.password == this.user.password
    ) {
      this.loginService.login();
    } else {
      alert(
        'Oppsss! Por favor, verifique seu nome de usuário ou senha e tente novamente!'
      );
    }
  }
}
