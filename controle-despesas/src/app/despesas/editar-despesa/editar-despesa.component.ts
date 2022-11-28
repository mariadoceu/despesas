import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-despesa',
  templateUrl: './editar-despesa.component.html',
  styleUrls: ['./editar-despesa.component.css']
})
export class EditarDespesaComponent implements OnInit {
  descricao!: string;
  valor!: string;
  vencimento!: string;
  constructor(public route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    // Recuperar os dados da url 
    this.descricao = this.route.snapshot.params['descricao'];
    this.valor = this.route.snapshot.params['valor'];
    this.vencimento = this.route.snapshot.params['vencimento'];
  }

}
