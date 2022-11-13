import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastrar-receitas',
  templateUrl: './cadastrar-receitas.component.html',
  styleUrls: ['./cadastrar-receitas.component.css']
})
export class CadastrarReceitasComponent implements OnInit {
  descricao!: string;
  valor!: string;
  constructor(public route: ActivatedRoute) {    
  }

  ngOnInit(): void {      
      this.descricao = this.route.snapshot.params['descricao'];
      this.valor = this.route.snapshot.params['valor'];
  }

}
