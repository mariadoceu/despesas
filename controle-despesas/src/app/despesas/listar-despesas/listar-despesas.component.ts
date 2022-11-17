import { Component, OnInit, ViewChild } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { Data, Router } from '@angular/router';
import { Despesa } from 'src/app/model/despesa';
import { NgForm } from '@angular/forms';

import { DespesaStorageService } from './listar-despesas-storage.service';
import { Shared } from 'src/app/util/shared';

@Component({
  selector: 'app-listar-despesas',
  templateUrl: './listar-despesas.component.html',
  styleUrls: ['./listar-despesas.component.css'],
  
  //provedor de conteúdo
  providers: [DespesaStorageService]
})
export class ListarDespesasComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  desp!: Despesa;
  desps?: Despesa[];

  descricao!: string;
  valor!: string;
  vencimento!:Data;
 

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private despService: DespesaStorageService) {      
  }
  
  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.desp = new Despesa('', '', 0);
    this.desps = this.despService.getDespesa();
  }

  onEdit(desp: Despesa) {
    let clone = Despesa.clone(desp);
    this.desp = clone; 
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.despService.isExist(this.desp.descricao)) {
      this.despService.save(this.desp);
    } else {
      this.despService.update(this.desp);
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';
    this.form.reset();
    this.desp = new Despesa('','', 0);
    this.desps = this.despService.getDespesa();
    this.despService.notifyTotalUsers();
  }

  onDelete(d: Despesa, id: string) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + id
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = this.despService.delete(d);
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = 'O item foi removido com sucesso!';
    } else {
      this.message = 'Opps! O item não pode ser removido!';
    }
    this.desps = this.despService.getDespesa();
    this.despService.notifyTotalUsers();
  }


}
