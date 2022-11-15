import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastrar-despesa',
  templateUrl: './cadastrar-despesa.component.html',
  styleUrls: ['./cadastrar-despesa.component.css']
})
export class CadastrarDespesaComponent implements OnInit {
  descricao!: string;
  valor!: string;
  vencimento!: string;
  constructor(public route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    // Recuperar os dados da url 
    this.descricao = this.route.snapshot.params['descricao'];
    this.valor = this.route.snapshot.params['valor'];
  }

}
