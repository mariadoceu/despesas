import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-receitas',
  templateUrl: './editar-receitas.component.html',
  styleUrls: ['./editar-receitas.component.css']
})
export class EditarReceitasComponent implements OnInit {  descricao!: string;
  valor!: string;
  constructor(public route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    // Recuperar os dados da url 
    this.descricao = this.route.snapshot.params['descricao'];
    this.valor = this.route.snapshot.params['valor'];
  }


}
