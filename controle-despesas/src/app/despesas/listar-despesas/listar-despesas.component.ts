import { Component, OnInit, ViewChild } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { Data, Router } from '@angular/router';
import { Despesa } from 'src/app/model/despesa';
import { NgForm } from '@angular/forms';

import { DespesaStorageService } from './listar-despesas-storage.service';
import { Shared } from 'src/app/util/shared';
// import uuid
import { v4 as uuidv4 } from 'uuid';

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
  valor!: number;
  vencimento!:Data;

  total: number = 0;
 
  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private despService: DespesaStorageService) {      
  }
  
  updateTotal(){
    this.total = 0;
    this.desps?.forEach(d => {
      this.total = this.total+d.valor;      
    });
  }
    
    ngOnInit(): void {
    Shared.initializeWebStorage();
    let ID_UNICO = uuidv4();
    this.desp = new Despesa(ID_UNICO, '', 0);
    this.desps = this.despService.getDespesa();
    
    //soma  
    this.updateTotal();
  
  }

  onEdit(desp: Despesa) {
    let clone = Despesa.clone(desp);
    this.desp = clone; 
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.despService.isExist(this.desp)) {
      this.despService.save(this.desp);
      console.log("NOVA: " + this.desp.descricao);
    } else {
      this.despService.update(this.desp);
      console.log("Atualiza: " + this.desp.descricao);
    }

    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';
    this.form.reset();
    this.desp = new Despesa('','', 0);
    this.desps = this.despService.getDespesa();
    this.despService.notifyTotalUsers();
    this.desp.id = uuidv4();
    this.updateTotal();
  }

  onDelete(d: Despesa, id: string) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + d.descricao
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
    this.desp.id = uuidv4();
    this.updateTotal();
  }


}
