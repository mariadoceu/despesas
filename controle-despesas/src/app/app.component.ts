import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('mobile') sideNav?: ElementRef;
  public titulo: string = "Gestão de depesas";
  public descricao: string = "Sistema para gestão de despesas domésticas";

  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);

  }
  


}
