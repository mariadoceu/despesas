import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Constants } from '../util/constants';
import { WebStorageUtil } from '../util/web-storage-util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  public card01: string = './assets/card-img-cadDespesas.png';
  public card02: string = './assets/card-img-verDespesas.png';
  public card03: string = './assets/card-img-cadReceita.png';

  constructor() { 
    this.user = WebStorageUtil.get(Constants.USERS_LOGADO_KEY);
    
  }
  ngOnInit(){
    this.user = WebStorageUtil.get(Constants.USERS_LOGADO_KEY);
  }

  

  teste = {
    titulo: 'Editar',
    styles: { backgroundColor: '#007bff' }
};


}
