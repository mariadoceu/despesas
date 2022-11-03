import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  public card01: string = './assets/card-img-cadDespesas.png';
  public card02: string = './assets/card-img-verDespesas.png';
  public card03: string = './assets/card-img-cadReceita.png';

  teste = {
    titulo: 'Editar',
    styles: { backgroundColor: '#007bff' }
};


}
