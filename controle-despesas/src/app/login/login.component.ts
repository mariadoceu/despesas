import { Component, OnInit } from '@angular/core';

import { Constants } from '../util/constants';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { WebStorageUtil } from '../util/web-storage-util';
import { Shared } from '../util/shared';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!: User;
  users?: User[];
  loginUser!: User;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.loginUser = new User('', '');
    // Cria o usuário root caso seja a primeira vez que o sistema é executado
    let userRoot = new User('root', 'root', true);
    userRoot.name = "Administrador Root"
    WebStorageUtil.set(Constants.USERNAME_KEY, userRoot);
  }

  onLogin() {
    this.user = WebStorageUtil.get(Constants.USERNAME_KEY);
    // Verifica se é a primeira vez que o sistema é executado
    if (this.loginUser.username === 'root' && this.loginUser.password === 'root') {
      
      let novoUserLogado = new User(this.user.username)
      novoUserLogado.id = this.user.id
      novoUserLogado.name = this.user.name

      WebStorageUtil.set(Constants.USERS_LOGADO_KEY, novoUserLogado);

      this.loginService.login();
    } else {
      this.users = WebStorageUtil.get(Constants.USERS_KEY);
      console.log("Users: " + JSON.stringify(this.users));
      
      // Verifica se o usuário está dentro do array
      let achou = false;
      this.users?.forEach(element => {
        if(element.username == this.loginUser.username &&
          element.password == this.loginUser.password){
            let novoUserLogado = new User(element.username)
            novoUserLogado.id = element.id
            novoUserLogado.name = element.name
            novoUserLogado.cpf = element.cpf

            WebStorageUtil.set(Constants.USERS_LOGADO_KEY, novoUserLogado);

            achou = true;
            return;
          }
      });
      console.log('Usuário encontrado : ' + achou);
      if (achou) {
        this.loginService.login();
      } else {
        alert(
          'Oppsss! Por favor, verifique seu nome de usuário ou senha e tente novamente!'
        );
      }
    }

  }
}
