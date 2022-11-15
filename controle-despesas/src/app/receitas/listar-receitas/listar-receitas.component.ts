import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { Data, Router } from '@angular/router';

// Modelo da classe Receita
export interface Receita {
  id: number;
  descricao: string;
  valor: number;
}

@Component({
  selector: 'app-listar-receitas',
  templateUrl: './listar-receitas.component.html',
  styleUrls: ['./listar-receitas.component.css']
})
export class ListarReceitasComponent implements OnInit {
  
  descricao!: string;
  valor!: string;
  receitas: Receita[];
  
  constructor(public router: Router) {
    this.receitas = [
      {
        id: 1,
        descricao: 'Salario',
        valor: 10.000,
      },
      {
        id: 2,
        descricao: 'Aluguel da casa x',
        valor: 1.200,
      },
      {
        id: 3,
        descricao: 'Pensão',
        valor: 4.000,
      },
    ];
  }
  openEdit(receita: { id: any; descricao: any; valor: any;}): void {
    this.router.navigate(['/receitas/editar', receita.descricao, receita.valor,]);
    
  }

  adicionarNovaReceita() {
    this.router.navigate(['/receitas/cadastrar-receitas']);
  }

  deletarReceita(receita: { id: any; descricao: any; valor: any; }): void {      
    let dialogo = confirm("Deseja realmente excluir a Receita?");
    if (dialogo) {
      // Percore o array de receita
      for (let i = 0; i < this.receitas.length; i++) {
        // Verifica se a receita atual é a receita que deseja excluir
        if (this.receitas[i].id == receita.id) {
          console.log("Receita encontrada");
          // Remove a receita que está na posição i
          this.receitas.splice(i, 1);
        }
      }
    }


  }


  ngOnInit(): void {
  }

}