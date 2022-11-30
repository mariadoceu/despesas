import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { Data, Router } from '@angular/router';
import { ReceitaService} from '../../service/receita.service';
import { Receita } from '../../model/receita.model';
import { LoginService } from 'src/app/service/login.service';
import { User } from 'src/app/model/user';
import { Subscription } from 'rxjs';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { Constants } from 'src/app/util/constants';

// Modelo da classe Receita
@Component({
  selector: 'app-listar-receitas',
  templateUrl: './listar-receitas.component.html',
  styleUrls: ['./listar-receitas.component.css']
})
export class ListarReceitasComponent implements OnInit {
  user!: User;
  loggedIn = false;
  subscription!: Subscription;
  descricao!: string;
  valor!: string;
  public receitas: Receita[] = [];
  
  constructor(public router: Router, private _receitaService: ReceitaService, private loginService: LoginService) {
    this.listarReceitas();
    this.user = WebStorageUtil.get(Constants.USERS_LOGADO_KEY);
    this.subscription = loginService.asObservable().subscribe((data) => {
      this.loggedIn = data;
    });
  }
  
  listarReceitas(){
    let self = this;
    let myPromise = new Promise(function(myResolve, myReject) { //uso do promise 
      self._receitaService.getReceitas().subscribe(
        listaReceitas => {
          self.receitas = listaReceitas.map(
            item=>{
              return new Receita(
                item.id,
                item.descricao,
                item.valor
              );
            }
          );
          myResolve("OK");
        },
        err => {
          myReject("Error");
        }
      );
    });
    myPromise.then(
      function(value) {
        console.log("Sucesso ao coletar dados da API");
      },
      function(error) {
        console.log("Erro ao coletar a lista de receitas da API!")
      }
    );
    
  }
  openEdit(receita: { id: any; descricao: any; valor: any;}): void {
    this.router.navigate(['receitas/add-or-update/', receita.id]); //edit passa o parametro id
    
  }

  adicionarNovaReceita() {
    this.router.navigate(['receitas/add-or-update/', "NEW"]);
  }
  excluir(id: string){
    console.log("Removendo a receita de id: " + id);
    console.log("Tipo da var: " + typeof(id));
    let self = this;
    let myPromise = new Promise(function(myResolve, myReject) {
      self._receitaService.removerReceita(id).subscribe(
        // Espera a promise ser cumprida 
        receita => {
          myResolve("OK");
        },
        // Se observar erro invoca o erro!
        err => {
          myReject("Error");
        }
      );
    });

    myPromise.then(
      function(value) {
        console.log("Sucesso ao excluir receita");
        window.location.href = "/receitas/listar-receitas";
      },
      function(error) {
        console.log("Erro ao excluir receita!")
      }
    );
  }
  deletarReceita(receita: { id: any; descricao: any; valor: any; }): void {      
    let dialogo = confirm("Deseja realmente excluir a Receita?");
    if (dialogo) {
      console.log("Removendo a receita de id: " + receita.id);
      console.log("Tipo da var: " + typeof(receita.id));
      let self = this;
      let myPromise = new Promise(function(myResolve, myReject) {
        self._receitaService.removerReceita(receita.id).subscribe(
          // Espera a promise ser cumprida 
          receita => {
            myResolve("OK");
          },
          // Se observar erro invoca o erro!
          err => {
            myReject("Error");
          }
        );
      });
  
      myPromise.then(
        function(value) {
          // Percore o array de receita
          for (let i = 0; i < self.receitas.length; i++) {
            // Verifica se a receita atual é a receita que deseja excluir
            if (self.receitas[i].id == receita.id) {
              console.log("Receita encontrada");
              // Remove a receita que está na posição i
              self.receitas.splice(i, 1);
            }
          }
        },
        function(error) {
          console.log("Erro ao excluir receita!")
        }
      );
      
    }
  }


  ngOnInit(): void {
    this.loggedIn = WebStorageUtil.get(Constants.LOGGED_IN_KEY) as boolean;
    this.user = WebStorageUtil.get(Constants.USERS_LOGADO_KEY);
   
  }

}