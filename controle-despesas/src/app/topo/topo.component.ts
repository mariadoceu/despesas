import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Constants } from '../util/constants';
import { WebStorageUtil } from '../util/web-storage-util';
import { LoginService } from './../service/login.service';
import { User } from '../model/user';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit , AfterViewInit {
  user: User;
  loggedIn = false;
  subscription!: Subscription;
  @ViewChild('mobile') sideNav?: ElementRef;

  constructor(private loginService: LoginService) {
    this.user = WebStorageUtil.get(Constants.USERS_LOGADO_KEY);
    this.subscription = loginService.asObservable().subscribe((data) => {
      this.loggedIn = data;
      console.log('observer - menu');
    });
  }
  ngOnInit(): void {
    this.loggedIn = WebStorageUtil.get(Constants.LOGGED_IN_KEY) as boolean;
    this.user = WebStorageUtil.get(Constants.USERS_LOGADO_KEY);
   
  }

  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);

  }

  onLogout() {
    //this.loggedIn = false;
    this.loginService.logout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  public titulo: string = "Gestão de depesas";
  public descricao: string = "Sistema para gestão de despesas domésticas";

}
