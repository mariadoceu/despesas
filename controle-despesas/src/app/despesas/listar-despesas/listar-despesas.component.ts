import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { Data, Router } from '@angular/router';

// Modelo da classe Despesa
export interface Despesa {
  id: number;
  descricao: string;
  valor: number;
  vencimento: string;
}
@Component({
  selector: 'app-listar-despesas',
  templateUrl: './listar-despesas.component.html',
  styleUrls: ['./listar-despesas.component.css']
})
export class ListarDespesasComponent implements OnInit {

  descricao!: string;
  valor!: string;
  vencimento!:string;
  despesas: Despesa[];


  constructor(public router: Router) {
    this.despesas = [
      {
        id: 1,
        descricao: 'Conta de Luz',
        valor: 190.3,
        vencimento: '10/12/2022',
      },
      {
        id: 2,
        descricao: 'Conta de Água',
        valor: 88.6,
        vencimento: '10/12/2022',
      },
      {
        id: 3,
        descricao: 'Conta de Internet',
        valor: 37.3,
        vencimento: '10/12/2022',
      },
    ];
  }
  openEdit(despesa: { id: any; descricao: any; valor: any; vencimento: any;}): void {

    this.router.navigate(['/despesas/editar', despesa.descricao, despesa.valor, despesa.vencimento]);
  }

  adicionarNovaDespesa() {
    this.router.navigate(['/despesas/cadastrar']);
  }

  deletarDespesa(despesa: { id: any; descricao: any; valor: any; }): void {
    // Criar uma caixa de dialogo perguntado se deseja realmente excluir
  
    let dialogo = confirm("Deseja realmente excluir a despesa?");
    if (dialogo) {
      // Percore o array de despesas
      for (let i = 0; i < this.despesas.length; i++) {
        // Verifica se a despesa atual é a despesa que deseja excluir
        if (this.despesas[i].id == despesa.id) {
          console.log("Despesa encontrada");
          // Remove a dispesa que está na posição i
          this.despesas.splice(i, 1);
        }
      }
    }


  }


  ngOnInit(): void {
  }

}

